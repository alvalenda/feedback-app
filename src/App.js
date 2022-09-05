import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import { feedbackData, findFreeId } from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import Card from './components/shared/Card'
import AboutPage from './pages/AboutPage'

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
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} reverse={true} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
                <Card> Hello World of Card </Card>
              </>
            }
          />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
