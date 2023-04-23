export const queryData = async (spell, dataArray) => {
  for (let i = 0; i < dataArray.length; i += 1) {
    if (
      spell === dataArray[i].name ||
      spell === dataArray[i].name.toLowerCase()
    ) {
      return dataArray[i];
    }
  }
};
