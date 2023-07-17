import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
const author = 'WOW';
const title = "Meh";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL600_SR600,400_.jpg";

function BookList() {
  return (
    <section className='booklist'>
          <Book author={author} title={title} img={img} />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = (props) => {
    console.log(props);
  return (
    <article className="book">
      <img src="https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL600_SR600,400_.jpg"></img>
      <h2>{title}</h2>
      <h4>{author.toUpperCase}</h4>
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