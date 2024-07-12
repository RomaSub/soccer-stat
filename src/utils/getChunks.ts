const getChunks = <T>(arr: T[], currentPage: number, pageSize: number): T[] => {
  const startIndex = (currentPage - 1) * pageSize;
  const chunkArray = arr.slice(startIndex, startIndex + pageSize);
  return chunkArray;
};

export default getChunks;
