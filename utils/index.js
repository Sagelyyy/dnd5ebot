const stringSimilarity = require("string-similarity");

const queryData = async (spell, dataArray) => {
  const searchTerm = spell.toLowerCase().replace(/'/g, "");
  const exactMatch = dataArray.find(
    (item) => item.name.toLowerCase().replace(/'/g, "") === searchTerm
  );

  if (exactMatch) {
    return { exact: exactMatch, suggestions: [] };
  }

  const suggestions = dataArray
    .map((item) => ({
      name: item.name,
      similarity: stringSimilarity.compareTwoStrings(
        searchTerm,
        item.name.toLowerCase().replace(/'/g, "")
      ),
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 5) // Limit the number of suggestions to 5, you can adjust this number
    .filter((item) => item.similarity > 0.3) // You can adjust the threshold for similarity
    .map((item) => item.name);

  return { exact: null, suggestions };
};

module.exports = queryData;
