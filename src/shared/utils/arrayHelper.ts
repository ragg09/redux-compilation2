export const arrayShuffler = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const arrayDuplicator = <T>(array: T[], numDuplications: number): T[] => {
  return array
    ? Array.from({ length: numDuplications }, (_, index) =>
      array.map((item, itemIndex) => ({ ...item, tempID: index * array.length + itemIndex + 1 }))
    ).flat()
    : [];
};
