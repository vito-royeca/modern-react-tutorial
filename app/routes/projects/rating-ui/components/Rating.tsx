import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Star from "./Star";

type RatingProps = {
  heading: string;
  color?: string;
  feedbackMessages?: string[];
};

const Rating: React.FC<RatingProps> = ({
    heading,
    color='gold',
    feedbackMessages = [
      "Very Bad",
      "Bad",
      "Okay",
      "Good",
      "Excellent"
    ]
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stars  = Array.from({length: 5}, (_, i) => i + 1);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  }

  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  }

  return (
    <div className="rating-container">
      <h2 className="text-xl font-bold text-blue-600">{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
            <Star
                key={star}
                star={star}
                rating={rating}
                hover={hover}
                color={color}
                ratingClick={setRating}
                hoverEnter={setHover}
                hoverLeave={() => setHover(0)}
            />
        ))}
      </div>
      { rating > 0 && (
        <p className="feedback">
            {feedbackMessages[rating - 1]}
        </p> 
      )}
      <Button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0 || submitted}
      >
        {submitted ? "Submitted" : "Submit"}
      </Button>
      <Modal
        isOpen={submitted}
        rating={rating}
        onClose={closeModal} />
    </div>
  );
};


export default Rating;