import React, { useEffect, useState } from 'react';

function Ratings() {
  // Define state to hold the ratings data
  const [ratings, setRatings] = useState([]);

  // Function to fetch ratings from localStorage
  useEffect(() => {
    const storedRatings = localStorage.getItem("ratings");
    if (storedRatings) {
      setRatings(JSON.parse(storedRatings));
    }
  }, []);

  return (
    <div>
      {ratings.length === 0 ? (
        <h1>No saved ratings available.</h1>
      ) : (
        ratings.map((rating:any, index) => (
          <div key={index}>
            <h2>{rating.title}</h2>
            <p>{rating.text}</p>
            <p>Liked: {rating.liked ? 'Yes' : 'No'}</p>
            <p>Disliked: {rating.disliked ? 'Yes' : 'No'}</p>
            <p>Saved: {rating.saved ? 'Yes' : 'No'}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Ratings;
