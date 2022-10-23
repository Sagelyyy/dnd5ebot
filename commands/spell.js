const { SlashCommandBuilder, codeBlock } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const newUnlisted = require('../new_unlisted');

const localSpellQuery = async (spell) => {
    for (let i = 0; i < newUnlisted.length; i += 1) {
        if (spell === newUnlisted[i].name || spell === newUnlisted[i].name.toLowerCase()) {
            return (newUnlisted[i])
        }
    }
}


module.exports = {
    data: new SlashCommandBuilder()
        .setName('spell')
        .setDescription('Get spell information.')
        .addStringOption(option =>
            option.setName('query')
                .setDescription('Get spell information.')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: false });
        const query = interaction.options.getString('query').toLowerCase();
        const newSpell = await localSpellQuery(query)

        if (!newSpell) {
            interaction.editReply(`**Spell Not Found!**`);
        } else {
            const data = await newSpell
            const desc = data?.desc[0].replace(/(\r\n|\n|\r)/gm, " ")
            const school = data?.school?.name
            const comp = data?.components
            const range = data?.range
            const castTime = data?.cast_time
            const duration = data?.duration
            const spellTable = data?.table
            const classes = data?.classes
            const source = data?.source

            const uname = interaction.user.username
            const userAvatar = interaction.user.avatarURL

            const webFilter = query.replace(/\s/g, "%20")
            const spellURL = `https://5e.tools/spells.html#${webFilter}_phb`

            console.log(`SPELL: ${uname}: ${query}`)

            const embedTable = new MessageEmbed()
                .setColor(0x0099FF)
                .setDescription(codeBlock(spellTable))

            let parts = desc.match(/.{1,1005}(?:\s|$)/g)

            if (parts.length > 1) {
                const embedArray = []
                const initialSpell = new MessageEmbed()
                    .setColor(0x0099FF)
                    .setTitle(data.name)
                    .setURL(spellURL)
                    .setAuthor({ name: uname, iconURL: userAvatar })
                    .addFields(
                        { name: '\u200B', value: comp, inline: true },
                        { name: '\u200B', value: range, inline: true },
                        { name: '\u200B', value: castTime, inline: true },
                        { name: '\u200B', value: duration, inline: true },
                        { name: '\u200B', value: '**Description: **' + parts[0] },
                    )
                    .setDescription(school)
                embedArray.push(initialSpell)
                for (let i = 1; i < parts.length; i += 1) {
                    const followupSpell = new MessageEmbed()
                        .setColor(0x0099FF)
                        .setDescription(parts[i])
                    embedArray.push(followupSpell)
                    if (i == parts.length - 1) {
                        const followupSpell = new MessageEmbed()
                            .setColor(0x0099FF)
                            // .setDescription(parts[i])
                            .setFooter({ text: `${classes}\n${source}` })
                        embedArray.push(followupSpell)
                    }
                }

                spellTable !== undefined ? embedArray.push(embedTable) : null

                await wait(200)
                await interaction.followUp({ embeds: embedArray })
            } else {
                const embedArr = []
                const spellEmbed = new MessageEmbed()
                    .setColor(0x0099FF)
                    .setTitle(data.name)
                    .setURL(spellURL)
                    .setAuthor({ name: uname, iconURL: userAvatar })
                    .addFields(
                        { name: '\u200B', value: comp, inline: true },
                        { name: '\u200B', value: range, inline: true },
                        { name: '\u200B', value: castTime, inline: true },
                        { name: '\u200B', value: duration, inline: true },
                        { name: '\u200B', value: desc },
                    )
                    .setDescription(school)
                    .setFooter({ text: `${classes}\n${source}` })

                embedArr.push(spellEmbed)
                spellTable !== undefined ? embedArr.push(embedTable) : null

                await wait(200)
                await interaction.editReply({ embeds: embedArr })

            }

        };
    }
}
