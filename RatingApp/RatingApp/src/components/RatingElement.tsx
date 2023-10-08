import React, { ReactElement, useState } from "react";
import "./RatingElement.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { render } from "@testing-library/react";
import { useSwipeable } from "react-swipeable";
import AlertBox from "./AlertBox";

function RatingElement() : ReactElement {

    const [cardText, setCardText] = useState("Example Item Text");
    const [cardTitle, setCardTitle] = useState("Example Item Title");
    const [isSaved, setSavedState] = useState(false);
    const [isLiked, setLikedState] = useState(false);
    const [isDisliked, setDislikedState] = useState(false);

    const swipeHandlers = useSwipeable({
      onSwipedLeft: () => [setDislikedState(true), showAlertBox("Disliked 💩")],
      onSwipedRight: () => [setLikedState(true), showAlertBox("Liked 🤩")],
      onSwipedDown: () => [saveRating({cardTitle}, {cardText}, {isLiked}, {isDisliked}, {isSaved}), setSavedState(true), 
        showAlertBox("Saved! You can find your saved ratings under My Ratings 🎖")],
      trackMouse: true
    });

    return (
    <>

    <Card {...swipeHandlers} id="rating-element">
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
      </Card.Body>
    </Card>

    <div className="d-grid gap-2">
        <Button onClick={() => [setLikedState(true), showAlertBox("Liked ❤️‍🔥")]} variant="outline-success" size="lg">
          Like or Right Swipe
        </Button>
        <Button onClick={() => [setDislikedState(true), showAlertBox("Disliked 💩")]} variant="outline-danger" size="lg">
          Dislike or Left Swipe
        </Button>
        <Button onClick={() => [saveRating({cardTitle}, {cardText}, {isLiked}, {isDisliked}, {isSaved}), setSavedState(true), 
          showAlertBox("Saved! You can find your saved ratings under My Ratings 🎖")]} variant="outline-primary" size="lg">
          Save or Down Swipe
        </Button>

      <Stack direction="horizontal" gap={1}>
        <Button onClick={() => [setCardTitle("Previous Item Title"), setCardText("Previous Item Text")]} 
        className="border" variant="outline-dark" size="lg">
          Previous
        </Button>
        <Button onClick={() => [setCardTitle("Next Item Title"), setCardText("Next Item Text")]} 
        className="border ms-auto" variant="outline-dark" size="lg">
          Next
        </Button>
      </Stack>
    </div>
    </>
    );
}


function showAlertBox(header : string) : void {

  render(<AlertBox heading={header}/>);

}

function saveRating(title: any, text: any, liked: any, disliked: any, saved: any): void {

  const rating = {
    title: title,
    text: text,
    liked: liked,
    disliked: disliked,
    saved: saved
  };

  localStorage.setItem("rating", JSON.stringify(rating));
}

export default RatingElement;