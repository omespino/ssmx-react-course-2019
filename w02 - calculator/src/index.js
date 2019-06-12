import React from 'react';
import ReactDOM from 'react-dom';
import ResultContainer from './ResultContainer'
import ButtonsGrid from './ButtonsGrid';


class App extends React.Component {
    
    constructor(props) {
        super(props)
        // this is the only time we do direct assignment 
        // to this.state
        this.state = { 
            total: "Hello Calc",
            operator: null,
            lastNo: null,
            currentNo: null
        }

        setTimeout(() => {
           this.setState({
                total: "0"
           })
        }, 5000) 
    }


    handleClick = buttonName => {
        this.setState(this.calculate(buttonName));
    };

    calculate = (buttonName) => {        
        switch(buttonName) { 
            case '+': { 
               console.log('sum')
               this.setState({ operator: '+'})
               break; 
            } 
            case '-': { 
                console.log('subs')
                this.setState({ operator: '-'})
                break; 
            }             
            case 'x': { 
                console.log('mul')
                this.setState({ operator: '-'})
                break; 
            } 
            case '/': { 
                console.log('div')
                this.setState({ operator: '-'})
                break; 
            } 
            
            case '=': { 
                console.log('equals')
                if(this.state.lastNo == null) {
                    break;
                } else {
                    this.setState(
                    { total :this.performOperation()} 
                    ) 
                       
                }
                break; 
            } 

            case 'CLEAR': { 
                console.log('div')
                this.setState({
                    total: "0",
                    operator: null,
                    lastNo: null,
                    currentNo: null
                })
                break; 
            } 

            default: { 
                if(this.state.lastNo == null) {
                    this.setState({ lastNo : buttonName })
                } else {
                    this.setState({ currentNo : buttonName })
                }
                this.setState({ total : buttonName })
               break; 
            } 
         } 
    }

    performOperation(){

        var result = 0;
        switch(this.state.operator) { 
            case '+': { 
                return Number(this.state.lastNo) + Number(this.state.currentNo)
            }            
            case '-': { 
                return Number(this.state.lastNo) - Number(this.state.currentNo)
            }
            case 'x': { 
                return Number(this.state.lastNo) * Number(this.state.currentNo)
            }
            case '/': { 
                return Number(this.state.lastNo) / Number(this.state.currentNo)
            }
            default: { 
                break
            }
        }
    }

    // React says we have to define render!!!
    render() {
      return (
        <div style={{ 
            width: 360 
        }}>
            <ResultContainer 
                value={this.state.total}/>
            <ButtonsGrid clickHandler={this.handleClick} />

        </div>
      )
    }   
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)