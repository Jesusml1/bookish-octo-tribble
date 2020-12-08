import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Book from "./components/Book";
import { booksData } from "./booksData";

const BookList = () => {
  return (
    <section className="booklist">
      {booksData.map((bookData) => (
        <Book {...bookData} key={bookData.product_id} />
      ))}
    </section>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>,
  document.getElementById("root")
);
