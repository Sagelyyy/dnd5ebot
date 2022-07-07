const { SlashCommandBuilder } = require('@discordjs/builders');
const { DataManager } = require('discord.js');
const fetch = require('node-fetch');
const newUnlisted = require('../new_unlisted')

const localSpellQuery = async (spell) => {
    for (let i = 0; i < newUnlisted.length; i += 1) {
        if (spell === newUnlisted[i].name || spell === newUnlisted[i].name.toLowerCase()) {
            return (newUnlisted[i])
        }
    }
}


module.exports = {
    data: new SlashCommandBuilder()
        .setName('nspell')
        .setDescription('Command for testing.')
        .addStringOption(option =>
            option.setName('query')
                .setDescription('Command for testing.')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const query = interaction.options.getString('query').toLowerCase();
        const newSpell = await localSpellQuery(query)

        //##Legacy code for pulling from dnd5e api
        // for filtering out spaces in the users input
        // const filtered = query.replace(/\s/g, "-")
        // const url = (`https://www.dnd5eapi.co/api/spells/${filtered}`)
        // const file = await fetch(url)

        if (!newSpell) {
            interaction.editReply(`**Spell Not Found!**`);
        } else {
            const data = await newSpell
            const damage = data?.damage?.damage_at_slot_level
            const heal = data?.heal_at_slot_level
            const desc = data?.desc?.join('\n\n')
            const school = data?.school?.name
            const comp = data?.components

            const spellData = (spell) => {
                let dmg = []
                for (const key in spell) {
                    if (Object.hasOwnProperty.call(spell, key)) {
                        const element = spell[key];
                        dmg.push(`**${key}**: ${element} \n`)
                    }
                }
                return dmg.join('\t\t\t\t\t')
            }
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
            const tooLongWeb = `https://5e.tools/spells.html#${webFilter}_phb`

            let trunc = []
            for (let i = 0; i < max - 700; i += 1) {
                trunc.push(desc[i])
            }
            const fixed = trunc.join('')

            console.log(`NSPELL: ${query}`)

            if (total < 2000) {
                if (damage || heal) {
                    interaction.editReply(`**${data.name}**:\n**School**: ${school}\t**Range**: ${data.range} \t**Duration**: ${data.duration}\t**Components**: ${comp} \n${desc} \n ${heal ? '**Healing**' : '**Damage**'}: \n\t\t\t\t\t${heal ? spellData(heal) : spellData(damage)} `);
                } else if (!damage || !heal) {
                    interaction.editReply(`**${data.name}**:\n**School**: ${school}\t**Range**: ${data.range} \t**Duration**: ${data.duration}\t**Components**: ${comp} \n${desc}`);
                }
            } else if (total > 2000) {
                if (damage || heal) {
                    interaction.editReply(`**${data.name}**\n**School**: ${school}\t**Range**: ${data.range} \t**Duration**: ${data.duration}\t**Components**: ${comp} \n${`${fixed}.... **${tooLong}**`}\n**Goto ${tooLongWeb} For full the full description.**`);
                } else if (!damage || !heal) {
                    interaction.editReply(`**${data.name}**:\n**School**: ${school}\t**Range**: ${data.range} \t**Duration**: ${data.duration}\t**Components**: ${comp} \n${`${fixed}.... **${tooLong}**`}\n**Goto ${tooLongWeb} For full the full description.**`);
                }
            }
        }
    },
};
