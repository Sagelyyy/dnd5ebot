const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('commands')
		.setDescription('Replies with a list of commands'),
	async execute(interaction) {
		await interaction.reply({content:`Commands currently supported are: \n
								**/spell <spell name>**: Will publicly print out information on the spell \n
								**/wspell <spell name**: Will privately send you the spell information.\n
								**/commands**: This list!`, ephemeral: true});
	},
};