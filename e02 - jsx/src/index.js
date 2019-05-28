// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// Instructions
// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// creat a react component
function showButtonLabel() {
    return 'click on me!'
}

function getCurrentTime() {
    let date = new Date()
    return date.toLocaleTimeString() 
        //+ ' ' + 
        //date.getHours() + ':' + date.getMinutes())
}

const App = () => {

    const buttonText = { text: 'react child click me' }
    // const buttonText = 'click me'
    const labelText = 'Enter name:'

    return (
        <div>
            <h1>Current time:</h1>
            <h3>{getCurrentTime()}</h3>
        </div>
    )
}

// const App = () => {

//     const buttonText = { text: 'react child click me' }
//     // const buttonText = 'click me'
//     const labelText = 'Enter name:'

//     return <div>
//                 <h1>Hi there!</h1>
//                 <label className="label" htmlFor="name">
//                     {labelText}
//                 </label>
//                 <input id="name" type="text" />
//                 <button style={{
//                     backgroundColor: 'blue', 
//                     color:'white'
//                 }}>{buttonText.text}</button>
//            </div>
// }



// Take the react compomennt and sho it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)