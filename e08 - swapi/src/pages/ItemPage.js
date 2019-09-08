import React from 'react'
import { connect } from 'react-redux'
import CategoriesContext from '../contexts/CategoriesContext'

const ItemPage = (props) => (
    <div>
        <CategoriesContext.Consumer>{
            ({category}) =>  <h2>{category}</h2>
        }
        </CategoriesContext.Consumer>
        <pre>
            <code>
                {JSON.stringify(props.itemResult, null, 4)}
            </code>
        </pre>
    </div>
)

function mapStateToProps({itemResult}) {
    return { itemResult }
}

export default connect(mapStateToProps)(ItemPage)