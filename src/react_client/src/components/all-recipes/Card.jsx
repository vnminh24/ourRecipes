import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const recipesCard = ({
  id,
  title,
  author,
  date,
  mealType,
  nutriScore,
  imgUrl,
}) => {
  return (
    <Link to={`/recipes/${id}`}>
      <div className="card">
        <div className="img">
          <img src={imgUrl} />
        </div>
        <div className="details">
          <div className="details-left">
            <p className="mealType">{mealType}</p>
            <h1>{title}</h1>
          </div>
          <div className="details-right">
            <div className="score">{Math.round(nutriScore)}/100</div>

            <span className="authorLine">
              Posted {date}
              {author && <span className="author"> by {author}</span>}
            </span>
          </div>
          <hr />
        </div>
      </div>
    </Link>
  );
};

export default recipesCard;
