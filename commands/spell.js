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

			// Below is to deal with messages that are too long. Discord has a max character length of 2000.
			// So we count the message length, and if it is greater than the max char length we cut the message
			// off by 100 characters, push it to a new array, and rejoin it, and let the player know with a message at the end. 

			let total = 0
			const max = 2000
			for(i=0;i<data.desc.length;i+=1){
				let charSize = data.desc[i].length
				total += charSize
			}
			const diff = total-max
			const tooLong = ' Message cut off due to length...'
	
				let trunc = []
			for(let i=0; i < max - 100 ;i+=1){
				trunc.push(desc[i])
			}
			const fixed = trunc.join('')


			// console.log(fixed)
			// console.log(data)
			// console.log(`Total length is: ${total}`)
			// console.log(`Diff is ${diff}`)


			if(damage && total < 2000){
				interaction.editReply(`**${data.name}**:  \n**Range**: ${data.range} \n**Duration**: ${data.duration} \n${desc} \n **Damage**: \n\t\t\t\t\t${damageData()} `);
			}else if(!damage && total < 2000){
				interaction.editReply(`**${data.name}**: \n**Range**: ${data.range} \n**Duration**: ${data.duration} \n${desc}`);
			}else if(damage && total > 2000){
				interaction.editReply(`**${data.name}**: \n**Range**: ${data.range} \n**Duration**: ${data.duration} \n${`${fixed}.... ${tooLong}`}`);
			}else if(!damage && total > 2000){
				interaction.editReply(`**${data.name}**: \n**Range**: ${data.range} \n**Duration**: ${data.duration} \n${`${fixed}.... **${tooLong}**`}`);
			}
		}
	},
};