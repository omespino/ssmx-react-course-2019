import React from 'react';
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import SelectedVideo from './SelectedVideo'
/* */
import axios from 'axios';

class App extends React.Component {

    state = { 
        videos: [],
        selectedVideo : null 
    }

    componentDidMount(){
        this.onSearchSubmit('dogs')
    }
    
     onSearchSubmit = async (term) =>{
       const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',{
               
           params: {
               part: 'snippet',
               q: term,
               maxResult: 5,
               key: "AIzaSyAxmrcKTEtJmOjAjQ6koS3dI0LaFx0suo8"
           }
       })

       this.setState({ 
           videos: response.data.items,
           selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = video => {
        console.log('from app', video)
        this.setState({ selectedVideo: video})
    }

    render(){
        return (
            <div className="ui container"
            style={{ marginTop: 16 }}> 
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <SelectedVideo video={this.state.selectedVideo }/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect}
                            videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default App;