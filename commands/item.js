const { SlashCommandBuilder, codeBlock } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;
const listData = require("../utils/items");
const localQuery = require("../utils/index");
const getSearchTerm = require("../utils/getSearchTerm");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("item")
    .setDescription("Get item information.")
    .addStringOption((option) =>
      option
        .setName("query")
        .setDescription("Get item information.")
        .setRequired(true)
    ),
  async execute(interaction, spell) {
    await interaction.deferReply({ ephemeral: true });
    const searchTerm = getSearchTerm(interaction, spell);
    const queryData = await localQuery(searchTerm, listData);

    if (!queryData.exact) {
      const suggestionsMessage =
        queryData.suggestions.length > 0
          ? `Did you mean one of the following?`
          : "No suggestions found. Please try a different search term.";

      const buttons = queryData.suggestions.map((suggestion, index) => {
        return new MessageButton()
          .setCustomId(`item-suggestion-${index}-${suggestion}`)
          .setLabel(suggestion)
          .setStyle("PRIMARY");
      });

      const row = new MessageActionRow().addComponents(buttons);

      await interaction.editReply({
        content: `Spell **${searchTerm}** Not Found!\n${suggestionsMessage}`,
        components: queryData.suggestions.length > 0 ? [row] : [],
      });
    } else {
      const data = await queryData.exact;
      const desc = data?.desc[0].replace(/(\r\n|\n|\r)/gm, " ");
      const value = data?.value;
      const type = data?.type;
      const itemTable = data?.table;

      const uname = interaction.user.username;
      const userAvatar = interaction.user.avatarURL;

      const webFilter = searchTerm.replace(/\s/g, "%20");
      const itemURL = `https://5e.tools/items.html#${webFilter}_egw`;

      console.log(`ITEM: ${uname}: ${query}`);

      const embedTable = new MessageEmbed()
        .setColor(0x0099ff)
        .setDescription(codeBlock(itemTable));

      let parts = desc.match(/.{1,1000}(?:\s|$)/g) || [];

      if (parts.length > 0) {
        const embedArray = [];
        const initialItem = new MessageEmbed()
          .setColor(0x0099ff)
          .setTitle(data.name)
          .setURL(itemURL)
          .setAuthor({ name: uname, iconURL: userAvatar })
          .addFields(
            { name: "\u200B", value: "**Misc: **" + value },
            { name: "\u200B", value: "**Description: **" + parts[0] }
          )
          .setDescription(`**Type:** ${type}`);
        embedArray.push(initialItem);
        for (let i = 1; i < parts.length; i += 1) {
          const followupItem = new MessageEmbed()
            .setColor(0x0099ff)
            .setDescription(parts[i]);
          embedArray.push(followupItem);
        }

        itemTable !== undefined ? embedArray.push(embedTable) : null;

        await wait(200);
        await interaction.followUp({ embeds: embedArray });
      } else {
        const itemEmbed = new MessageEmbed()
          .setColor(0x0099ff)
          .setTitle(data.name)
          .setURL(itemURL)
          .setAuthor({ name: uname, iconURL: userAvatar })
          .addFields(
            { name: "\u200B", value: "**Misc: **" + value },
            parts.length > 0
              ? { name: "\u200B", value: "**Description: **" + parts[0] }
              : { name: "\u200B", value: "**Description: ** Generic item" }
          )
          .setDescription(type);
        interaction.editReply({ embeds: [itemEmbed] });
      }
    }
  },
};
