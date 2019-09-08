import React from 'react'
import { connect } from 'react-redux'
import { filterSearchAction } from '../actions'

class SearchBar  extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          termInput: ''
        }
    }
    onInputChange = (event)=>{
        this.setState({termInput: event.target.value})
        console.log("props", this.props.category)
    }

    onFormSubmit = (event) =>{
        event.preventDefault()
        const termInput = this.state.termInput
        this.props.filterSearchAction( this.props.category,termInput)
    }

    render(){
        return (
            <div className="search-bar"> 
                <form onSubmit={this.onFormSubmit} className="ui form">
                        <input 
                            type="text"
                            placeholder="Search ..."
                            value={this.state.termInput}
                            name="termInput"
                            onChange={this.onInputChange}
                        />
                        
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { state }
}

export default connect(mapStateToProps, {filterSearchAction})(SearchBar)
