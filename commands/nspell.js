const { SlashCommandBuilder } = require('@discordjs/builders');
const { DataManager } = require('discord.js');
const fetch = require('node-fetch');
const unlistedSpellData = require('../unlistedSpells')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(' nspell')
        .setDescription('Testing for unlisted spells.')
        .addStringOption(option =>
            option.setName('query')
                .setDescription('Whisper spell info to you.')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const query = interaction.options.getString('query');
        const filtered = query.replace(/\s/g, "-")
        const url = (`https://www.dnd5eapi.co/api/spells/${filtered}`)
        const file = await fetch(url)

        const localSpellQuery = (spell) => {
            for (let i = 0; i < unlistedSpellData.length; i += 1) {
                if (spell === unlistedSpellData[i].name || spell === unlistedSpellData[i].name.toLowerCase()) {
                    console.log(unlistedSpellData[i].desc)
                }
            }
        }

        if (!file.ok) {
            const newSpell = localSpellQuery(query)
            if (!newSpell) {
               interaction.editReply(`**Spell Not Found!**`);
            }
        } else {
            const data = await file.json()
            const damage = data?.damage?.damage_at_slot_level
            const heal = data?.heal_at_slot_level
            const desc = data.desc.join('\n\n')
            const school = data?.school?.name

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

            console.log(`nspell Ephemeral: ${query}`)

            if (total < 2000) {
                if (damage || heal) {
                    interaction.editReply(`**${data.name}**:\n**School**: ${school}\t**Range**: ${data.range} \t**Duration**: ${data.duration} \n${desc} \n ${heal ? '**Healing**' : '**Damage**'}: \n\t\t\t\t\t${heal ? spellData(heal) : spellData(damage)} `);
                } else if (!damage || !heal) {
                    interaction.editReply(`**${data.name}**:\n**School**: ${school}\t**Range**: ${data.range} \t**Duration**: ${data.duration} \n${desc}`);
                }
            } else if (total > 2000) {
                if (damage || heal) {
                    interaction.editReply(`**${data.name}**\n**School**: ${school}\t**Range**: ${data.range} \t**Duration**: ${data.duration} \n${`${fixed}.... **${tooLong}**`}\n**Goto ${tooLongWeb} For full the full description.**`);
                } else if (!damage || !heal) {
                    interaction.editReply(`**${data.name}**:\n**School**: ${school}\t**Range**: ${data.range} \t**Duration**: ${data.duration} \n${`${fixed}.... **${tooLong}**`}\n**Goto ${tooLongWeb} For full the full description.**`);
                }
            }
        }
    },
};
