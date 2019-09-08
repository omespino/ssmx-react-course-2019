import React from 'react'
import { connect } from 'react-redux'
import { updateItemState} from '../actions'
import SearchBar from '../components/SearchBar'
import swapiCategoriesResource from '../components/swapiCategoriesResources'
import CategoriesContext from '../contexts/CategoriesContext'

const CategoryList = (props) =>{
    const { category } = props.match.params
    const categoryResult = swapiCategoriesResource(category)
    console.log("props cat",props.categoryResult)
    return (
        <div>
            <CategoriesContext.Consumer>{
                ({category}) => <h2>{category}</h2>
            }
            </CategoriesContext.Consumer>
            <SearchBar category={category} />
            <div> {
                    Object.values(props.categoryResult).map(catItem => {      
                        return (
                            <div key={catItem.name || catItem.title}>
                            <button 
                            className="item-button"
                                onClick={() => {
                                    props.updateItemState(catItem.url)
                                    props.history.push('/item') }   
                                } >{catItem.name || catItem.title}
                            </button> <br />
                            </div>)
                        })
                    } 
            </div>
        </div>
    )
}

function mapStateToProps({ categoryResult }) {
    return { categoryResult }
}

export default connect(mapStateToProps, {updateItemState})(CategoryList)