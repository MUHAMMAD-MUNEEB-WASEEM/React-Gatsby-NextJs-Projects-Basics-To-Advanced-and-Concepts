//sorting and shuffling the data in array so that each time, correct answer postion from all of the answers changes

export const shuffleArray = (array: any[]) => 
    [...array].sort(() => Math.random() - 0.5)