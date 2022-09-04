export const feedbackData = [
  {
    id: 1,
    rating: 10,
    text: 'lorem ipsum dolor sit amet, consectetur adip. consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 2,
    rating: 9,
    text: 'lorem ipsum dolor sit amet, consectetur adip. consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 3,
    rating: 8,
    text: 'lorem ipsum dolor sit amet, consectetur adip. consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
]

export const findFreeId = (list) => {
  const sortedById = listSortedById(list)
  let previousId = 0

  for (const item of sortedById) {
    if (item.id !== previousId + 1) {
      return previousId + 1
    }
    previousId = item.id
  }

  // console.log(previousId + 1)
  return previousId + 1
}

const listSortedById = (list) => {
  return list.slice().sort((a, b) => a.id - b.id)
}

export const FeedbackData = { feedbackData, findFreeId }

export default FeedbackData
