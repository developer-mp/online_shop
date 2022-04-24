import Rating from "@material-ui/lab/Rating";
import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <Rating
      value={rating}
      onChange={(e, v) => {
        setRating(v);
      }}
    />
  );
};

export default StarRating;
