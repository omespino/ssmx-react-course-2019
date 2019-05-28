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
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

// creat a react component
const App = () => {
    // const buttonText = { text: 'react child click me' }
    // // const buttonText = 'click me'
    // const labelText = 'Enter name:'

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails 
                author="Linda" 
                timeAgo="Today 4:45pm"
                avatar={faker.image.avatar()}
                content="kudos on that!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                author="John"
                timeAgo="Today 21:45pm"
                avatar={faker.image.avatar()}
                content="GGWP"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author="Sam"            
                timeAgo="Yesterday 4:45pm"
                avatar={faker.image.avatar()}            
                content="Nice work!"/>
            </ApprovalCard>

        </div>
    )
}



// Take the react compomennt and sho it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)