const { SlashCommandBuilder, codeBlock } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;
const newUnlisted = require("../utils/new_unlisted");
const localQuery = require("../utils/index");

const newQuery = async (spell, dataArray) => {
  const searchTerm = spell.toLowerCase().replace(/'/g, "");
  const exactMatch = dataArray.find(
    (item) => item.name.toLowerCase().replace(/'/g, "") === searchTerm
  );

  if (exactMatch) {
    return { exact: exactMatch, suggestions: [] };
  }

  const suggestions = dataArray
    .filter((item) =>
      item.name.toLowerCase().replace(/'/g, "").includes(searchTerm)
    )
    .slice(0, 5) // Limit the number of suggestions to 5, you can adjust this number
    .map((item) => item.name);

  return { exact: null, suggestions };
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nspell")
    .setDescription("Spell testing command.")
    .addStringOption((option) =>
      option
        .setName("query")
        .setDescription("Whisper spell information.")
        .setRequired(true)
    ),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const query = interaction.options.getString("query").toLowerCase();
    const newSpell = await newQuery(query, newUnlisted);

    if (!newSpell.exact) {
      const uname = interaction.user.username;
      console.log(`FAILED NSPELL: ${uname}: ${query}`);
      const suggestionsMessage =
        newSpell.suggestions.length > 0
          ? `Did you mean one of the following?\n**${newSpell.suggestions.join(
              "\n"
            )}**`
          : "No suggestions found. Please try a different search term.";

      interaction.editReply({
        content: `**Spell Not Found!**\n${suggestionsMessage}`,
      });
    } else {
      const data = await newSpell.exact;
      const desc = data?.desc[0].replace(/(\r\n|\n|\r)/gm, " ");
      const school = data?.school?.name;
      const comp = data?.components;
      const range = data?.range;
      const castTime = data?.cast_time;
      const duration = data?.duration;
      const spellTable = data?.table;
      const classes = data?.classes;
      const source = data?.source;

      const uname = interaction.user.username;
      const userAvatar = interaction.user.avatarURL;

      const webFilter = query.replace(/\s/g, "%20");
      const spellURL = `https://5e.tools/spells.html#${webFilter}_phb`;

      console.log(`WSPELL: ${uname}: ${query}`);

      const embedTable = new MessageEmbed()
        .setColor(0x0099ff)
        .setDescription(codeBlock(spellTable));

      let parts = desc.match(/.{1,1005}(?:\s|$)/g);

      if (parts.length > 1) {
        const embedArray = [];
        const initialSpell = new MessageEmbed()
          .setColor(0x0099ff)
          .setTitle(data.name)
          .setURL(spellURL)
          .setAuthor({ name: uname, iconURL: userAvatar })
          .addFields(
            { name: "\u200B", value: comp, inline: true },
            { name: "\u200B", value: range, inline: true },
            { name: "\u200B", value: castTime, inline: true },
            { name: "\u200B", value: duration, inline: true },
            { name: "\u200B", value: "**Description: **" + parts[0] }
          )
          .setDescription(school);
        embedArray.push(initialSpell);
        for (let i = 1; i < parts.length; i += 1) {
          const followupSpell = new MessageEmbed()
            .setColor(0x0099ff)
            .setDescription(parts[i]);
          embedArray.push(followupSpell);
          if (i == parts.length - 1) {
            const followupSpell = new MessageEmbed()
              .setColor(0x0099ff)
              // .setDescription(parts[i])
              .setFooter({ text: `${classes}\n${source}` });
            embedArray.push(followupSpell);
          }
        }

        spellTable !== undefined ? embedArray.push(embedTable) : null;

        await wait(200);
        await interaction.followUp({ embeds: embedArray });
      } else {
        const embedArr = [];
        const spellEmbed = new MessageEmbed()
          .setColor(0x0099ff)
          .setTitle(data.name)
          .setURL(spellURL)
          .setAuthor({ name: uname, iconURL: userAvatar })
          .addFields(
            { name: "\u200B", value: comp, inline: true },
            { name: "\u200B", value: range, inline: true },
            { name: "\u200B", value: castTime, inline: true },
            { name: "\u200B", value: duration, inline: true },
            { name: "\u200B", value: desc }
          )
          .setDescription(school)
          .setFooter({ text: `${classes}\n${source}` });

        embedArr.push(spellEmbed);
        spellTable !== undefined ? embedArr.push(embedTable) : null;

        await wait(200);
        await interaction.editReply({ embeds: embedArr });
      }
    }
  },
};
