import React from "react";

const Book = (props) => {
  const { author, img_url, title } = props;

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(props);
      }}
    >
      <img src={img_url} alt="book" />
      <h2>{title}</h2>
      <h4 style={{ color: "gray", marginTop: "0.5rem" }}>{author}</h4>
      <button type="button">get</button>
    </article>
  );
};

export default Book;
