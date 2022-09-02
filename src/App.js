import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import Card from "./components/shared/Card";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <h1> Olá Mundo do React </h1>
        <FeedbackList feedback={feedback} />
        <Card> Hello World of Card </Card>
      </div>
    </>
  );
}

export default App;
