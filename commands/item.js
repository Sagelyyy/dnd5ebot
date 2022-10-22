const { SlashCommandBuilder, codeBlock } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
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
        .setName('item')
        .setDescription('Get item information.')
        .addStringOption(option =>
            option.setName('query')
                .setDescription('Get item information.')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: false });
        const query = interaction.options.getString('query').toLowerCase();
        const itemData = await itemQuery(query)

        if (!itemData) {
            interaction.editReply(`**Item Not Found!**`);
        } else {
            const data = await itemData
            const desc = data?.desc[0].replace(/(\r\n|\n|\r)/gm, " ")
            const value = data?.value
            const type = data?.type
            const itemTable = data?.table

            const uname = interaction.user.username
            const userAvatar = interaction.user.avatarURL

            const webFilter = query.replace(/\s/g, "%20")
            const itemURL = `https://5e.tools/items.html#${webFilter}_egw`

            console.log(`ITEM: ${uname}: ${query}`)

            const embedTable = new MessageEmbed()
            .setColor(0x0099FF)
            .setDescription(codeBlock(itemTable))

        let parts = desc.match(/.{1,1000}(?:\s|$)/g)  || []

        if (parts.length > 0) {
            const embedArray = []
            const initialItem = new MessageEmbed()
                .setColor(0x0099FF)
                .setTitle(data.name)
                .setURL(itemURL)
                .setAuthor({ name: uname, iconURL: userAvatar })
                .addFields(
                    { name: '\u200B', value: '**Misc: **' + value },
                    { name: '\u200B', value: '**Description: **' + parts[0] },
                )
                .setDescription(`**Type:** ${type}`)
            embedArray.push(initialItem)
            for (let i = 1; i < parts.length; i += 1) {
                const followupItem = new MessageEmbed()
                    .setColor(0x0099FF)
                    .setDescription(parts[i])
                embedArray.push(followupItem)
            }

            itemTable !== undefined ? embedArray.push(embedTable) : null

            await wait(200)
            await interaction.followUp({ embeds: embedArray })
        } else {
            const itemEmbed = new MessageEmbed()
            .setColor(0x0099FF)
            .setTitle(data.name)
            .setURL(itemURL)
            .setAuthor({ name: uname, iconURL: userAvatar })
            .addFields(
                { name: '\u200B', value: '**Misc: **' + value },
                parts.length > 0 ? { name: '\u200B', value: '**Description: **' + parts[0] } : { name: '\u200B', value: '**Description: ** Generic item'},
            )
            .setDescription(type)
            interaction.editReply({ embeds: [itemEmbed] })
        }

        }
    },
};
