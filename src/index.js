import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
    return (
        <div>
            <h2>john doe</h2>
            <p>this is my message</p>
    </div>
    );
}
const Person = () => <h2>john doe</h2>;
const Message = () => {
    return <p>this is my message</p>;
};

const Greetings = () => {
  return React.createElement('h2', {}, 'hello world');
};


//function Greeting() {
//  return (
//    <div>
//      <h2>hello world</h2>
//    </div>
//  );
//}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);