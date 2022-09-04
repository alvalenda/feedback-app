import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RattingSelect from "./RattingSelect";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    if (newText === "") {
      setBtnDisabled(true);
      setMessage(null);
      return;
    }
    if (newText !== "" && newText.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters long");
      return;
    }
    setBtnDisabled(false);
    setMessage(null);
  };

  const addFeedback = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      };
      //   if (feedbackEdit.edit === true) {
      //     updateFeedback(feedbackEdit.item.id, newFeedback);
      //   } else {
      //     addFeedback(newFeedback);
      //   }
      addFeedback(newFeedback);
      // NOTE: reset to default state after submission
      //   setRating(10);
      setBtnDisabled(true);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RattingSelect
          select={(rating) => setRating(rating)}
          selected={rating}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
