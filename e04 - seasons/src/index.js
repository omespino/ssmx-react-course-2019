import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';


class App extends React.Component {

    constructor(props) {
        super(props)
        // this is the only time we do direct assignment 
        // to this.state
        this.state = { 
            lat: null,
            errorMessage: ''
        }
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('position',position)
                // always to update state USE SETSTATE!!
                this.setState({
                    lat: position.coords.latitude
                })
            },
            (error) => {
                // always to update state USE SETSTATE!!
                this.setState({
                    errorMessage: error.message
                })
            }
        )
    }

    renderContent() {
        if (this.setState.errorMessage && !this.state.lat) {
            return  <div> Error: {this.state.errorMessage} </div>
        }
        
        if (!this.setState.errorMessage && this.state.lat) {
            return  <SeasonDisplay lat={this.state.lat} />
        } 
           
        return  <Spinner 
                message="Please accept the location request"/>
        
    }

    // React says we have to define render!!!
    render() {
      return (
        <div className="border red">
            {this.renderContent()}
        </div>
      )
    }   
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)