export const feedbackData = [
    {
      "text": "Best product I've ever had!!!! :)",
      "rating": 10,
      "id": 1
    },
    {
      "text": "First!!!!!! YOLO!",
      "rating": 9,
      "id": 2
    },
    {
      "text": "I've heard that studies show that travel provides longer term happiness than buying physical goods. The memories last a lifetime!",
      "rating": 8,
      "id": 3
    },
    {
      "text": "Seven and seven are fourteen, with another seven twenty one. Zaza is vanished, a zoom zoom zoom stays.",
      "rating": 7,
      "id": 4
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
