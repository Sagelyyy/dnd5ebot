const { SlashCommandBuilder } = require('@discordjs/builders');
const { DataManager } = require('discord.js');
const fetch = require('node-fetch');
const listData = require('../items')

const itemQuery = async (spell) => {
    for (let i = 0; i < listData.length; i += 1) {
        if (spell === listData[i].name || spell === listData[i].name.toLowerCase()) {
            return (listData[i])
        }
    }
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('witem')
        .setDescription('Whisper item information.')
        .addStringOption(option =>
            option.setName('query')
                .setDescription('Whisper item information.')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const query = interaction.options.getString('query').toLowerCase();
        const itemData = await itemQuery(query)

        //##Legacy code for pulling from dnd5e api
        // for filtering out spaces in the users input
        // const filtered = query.replace(/\s/g, "-")
        // const url = (`https://www.dnd5eapi.co/api/spells/${filtered}`)
        // const file = await fetch(url)

        if (!itemData) {
            interaction.editReply(`**Item Not Found!**`);
        } else {
            const data = await itemData
            const desc = data?.desc?.join('\n\n')
            const value = data?.value?.name
            const type = data?.type
            const uname = interaction.user.username

            // Below is to deal with messages that are too long. Discord has a max character length of 2000.
            // So we count the message length, and if it is greater than the max char length we cut the message
            // off by a number of characters, push it to a new array, and rejoin it, and let the player know with a message at the end. 

            let total = 0
            const max = 2000
            for (i = 0; i < data.desc.length; i += 1) {
                let charSize = data.desc[i].length
                total += charSize
            }
            const diff = total - max
            const tooLong = ' Message cut off due to length...'
            // if too long, we need to add the %20 for spaces in the web address
            const webFilter = query.replace(/\s/g, "%20")
            const tooLongWeb = `https://5e.tools/items.html#${webFilter}_egw`

            let trunc = []
            for (let i = 0; i < max - 700; i += 1) {
                trunc.push(desc[i])
            }
            const fixed = trunc.join('')

            console.log(`WITEM: ${uname}: ${query}`)

            if (total < 2000) {
                if(desc){
                    interaction.editReply(`**${data.name}**:\n**Item Type**: ${type}\n**Description**: ${desc}\n**Misc Info**: ${data.value} `);
                }else{
                    interaction.editReply(`**${data.name}**:\n**Item Type**: ${type}\n**Misc Info**: ${data.value} `);
                }
            } else if (total > 2000) {
                interaction.editReply(`**${data.name}**:\n**Item Type**: ${type}\n**Description**: ${`${fixed}.... **${tooLong}**`}\n**Goto ${tooLongWeb} For full the full description.**`);
            }
        }
    },
};
