import React from 'react'
import { connect } from 'react-redux'
import { selectCategory } from '../actions'

class Categories extends React.Component{
    renderList(){
        return this.props.categories.map((category) =>{
            return (
                <div key={category.title}>
                    <button 
                        onClick={() => {
                            this.props.selectCategory(category); props.history.push('/item') 
                        }}
                    >
                        {category.title}
                    </button>
                </div>
            )
        })
    }
    render(){
        return <div>{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return {categories: state.categories }
}

export default connect(mapStateToProps,{
    selectCategory:selectCategory
})(Categories)