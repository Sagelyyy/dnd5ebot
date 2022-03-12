const { SlashCommandBuilder } = require('@discordjs/builders');
const { DataManager } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spell')
		.setDescription('Get info on a spell.')
		.addStringOption(option =>
			option.setName('query')
				.setDescription('spell information')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.deferReply();
		const query = interaction.options.getString('query');
		const filtered = query.replace(/\s/g, "-")
		const url = (`https://www.dnd5eapi.co/api/spells/${filtered}`)
		const file = await fetch(url)
		if (!file.ok) {
			interaction.editReply(`**Spell Not Found!**`);
		} else {
			const data = await file.json()
			const damage = data?.damage?.damage_at_slot_level
			const desc = data.desc.join('\n\n')
			const damageData = () => {
				let dmg = []
				for (const key in damage) {
					if (Object.hasOwnProperty.call(damage, key)) {
						const element = damage[key];
						dmg.push(`**${key}**: ${element} \n`)
					}
				}
				return dmg.join('\t\t\t\t\t')
			}
			if(damage){
				interaction.editReply(`**${data.name}**:  \n**Range**: ${data.range} \n**Duration**: ${data.duration} \n${desc} \n **Damage**: \n\t\t\t\t\t${damageData()} `);
			}else{
				interaction.editReply(`**${data.name}**: \n**Range**: ${data.range} \n**Duration**: ${data.duration} \n${desc}`);
			}
		}
	},
};