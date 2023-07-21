import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
const firstBook = {
  author: "Jordan Moore",
  title: "Interesting Facts For Curious Minds",
  img: "https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL600_SR600,400_.jpg",
};
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: "https://i.scdn.co/image/ab67616d0000b2735d02af8588949bf7ee2f0a08",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img}></img>
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
      {/*<p>{let x = 6}</p>*/}
      
    </article>
  );
};

const Image = () => (
    <img
        src='https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL600_SR600,400_.jpg'
    alt='Things'/>
);
const Title = () => {
  return <h2>Book Title</h2>;
};
const Author = () => <h4>Author</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);