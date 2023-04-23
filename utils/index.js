const queryData = async (spell, dataArray) => {
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

module.exports = queryData;
