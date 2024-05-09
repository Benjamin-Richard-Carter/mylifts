// onDragEnd({ active, over }) {
//   const indexList = items.map(
//     (item) => item.params.data?.lexorank,
//   ) as string[];

//   const newRank = generateLexoRank({
//     indexList,
//     newIndex: over?.id as string,
//   });

//   const currentIndex = items.findIndex(
//     (item) => item.params.id === active.id,
//   );

//   const updatedItem = {
//     ...items[currentIndex]!,
//     lexoRank: newRank!.toString(),
//     params: {
//       ...items[currentIndex]!.params,
//       id: newRank!.toString(),
//       data: { lexorank: newRank!.toString() },
//     },
//   };

//   const newItems = items.toSpliced(currentIndex, 1, updatedItem);

//   const sortedItems = newItems.sort((a, b) => {
//     if (!a.lexoRank && b.lexoRank) {
//       return -1;
//     }
//     if (a.lexoRank && !b.lexoRank) {
//       return 1;
//     }

//     if (!a.lexoRank || !b.lexoRank) {
//       return 0;
//     }

//     return a.lexoRank.localeCompare(b.lexoRank);
//   });

//   receiveNewList(sortedItems);
// },
