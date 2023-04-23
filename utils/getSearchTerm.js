function getSearchTerm(interaction, spell) {
  return spell
    ? spell.toLowerCase()
    : interaction.options.getString("query").toLowerCase();
}

module.exports = getSearchTerm;
