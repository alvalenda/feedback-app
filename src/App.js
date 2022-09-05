import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import { feedbackData, findFreeId } from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import Card from './components/shared/Card'

function App() {
  const [feedback, setFeedback] = useState(feedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = findFreeId(feedback)
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete Feedback ' + id + '?'))
      setFeedback(feedback.filter((item) => item.id !== id))
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} reverse={true} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        <Card> Hello World of Card </Card>
      </div>
    </>
  )
}

export default App
