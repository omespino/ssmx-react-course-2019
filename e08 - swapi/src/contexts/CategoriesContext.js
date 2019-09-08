import React from 'react'
const Context = React.createContext('')

export class CategoriesStore extends React.Component{
    state = { category: '' }
    onCategoryChange = (category) =>{
        this.setState({category})
    }
    render(){
        return(
            <Context.Provider value={{
                    ...this.state, onCategoryChange: this.onCategoryChange
                }
            }>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context