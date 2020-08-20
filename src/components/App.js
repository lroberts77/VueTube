import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import SearchBar from './SearchBar/SearchBar';
import VideoDetail from './VideoDetail/VideoDetail';
import VideoList from './VideoList/VideoList';

import youtube from '../components/api/youtube.js';

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount(){
        this.handleSubmit('universe')
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {  
        params: {
            part: 'snippet',
            maxResults: 5,
            key: 'AIzaSyD0QQI_1unZ_2UmmfbIyFa99SrwiHGHWRs',
            q: searchTerm,
            }
    });

    console.log(response)
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });

    }

    render(){
        const {selectedVideo, videos} = this.state;
        return(
            <div>   
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                         <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div> 
        )
    }
}

export default App;