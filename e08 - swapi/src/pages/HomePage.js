import React from 'react';
import CategoriesContext from '../contexts/CategoriesContext';
import { connect } from 'react-redux'
import { updateCategoryState } from '../actions'
import '../styles.css';

class HomePage extends React.Component {
    static contextType = CategoriesContext;
    onCategorySelected = (categorySelected) => {
        this.props.updateCategoryState(categorySelected); 
        this.context.onCategoryChange(categorySelected);
        this.props.history.push('/list/' + categorySelected);
    }
    render(){
        return (
            <div>
                <button className="category-button"
                onClick={() => this.onCategorySelected('planets')}>
                    Planets
                </button>
                <button className="category-button"
                onClick={() => this.onCategorySelected('starships') }>
                    Spaceships
                </button>
                <button className="category-button"
                onClick={() => this.onCategorySelected('vehicles') }>
                    Vehicles
                </button>
                <br />
                <button className="category-button"
                onClick={() => this.onCategorySelected('people') }>
                    People
                    </button>
                <button className="category-button"
                onClick={() => this.onCategorySelected('films') }>
                    Films
                </button>
                <button className="category-button"
                onClick={() => this.onCategorySelected('species') }>
                    Species
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { categoryResult: state };
}
     
export default connect(mapStateToProps,{updateCategoryState})(HomePage);