import React from 'react';
import SearchBar from './SearchBar'
import ImageList from './ImageList'
/* */
import axios from 'axios';

class App extends React.Component {

    state = { images: [] }

     onSearchSubmit = async (term) =>{
       const response = await axios.get(
           'https://api.unsplash.com/search/photos',{
           params: {
               query: term
           },
           headers: {
               Authorization: 'Client-ID 6ab731e1422eaf8605c05dd581c37bdbaf27ba10dde7ed5a257c2c1c14f5544b'
           }
       })

       this.setState({ images: response.data.results})
    }

    render(){
        return (
            <div className="ui container"
            style={{ marginTop: 16 }}> 
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }

}

export default App;