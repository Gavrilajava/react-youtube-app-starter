import React, { Component } from "react";
import API_KEY from './keys'
import Video from './components/Video'
import Search from './components/Search'
import SearchResult from './components/SearchResult'

class App extends Component {

  constructor(){
    super()
    this.state = {
      params: {
        key: API_KEY.API_KEY,
        type: "video"
      },
      searchResult: {},
      selectedVideo: 0
    }
  }

  componentDidMount(){
    this.fetchVideos()
  }

  fetchVideos = () => {
    const BASE_URL = "https://www.googleapis.com/youtube/v3/search?part=snippet"
    let url = BASE_URL + Object.keys(this.state.params).map(key => `&${key}=${this.state.params[key]}`).join('')
    fetch(url).then(resp => resp.json()).then(json => this.setState({searchResult: json, selectedVideo: 0}))
  }

  selectVideo = (id) => this.setState({selectedVideo: this.state.searchResult.items.findIndex(video => id === video.id.videoId)})
   

  getSelected = () => !!this.state.searchResult.items? this.state.searchResult.items[this.state.selectedVideo]: null
  
  getVideos = () => !!this.state.searchResult.items? this.state.searchResult.items : []

  setSearch = (str) => {
    this.setState({params: {...this.state.params, q: str}})
    this.fetchVideos()
  }

  render() {
    return (
      <div>
        <Search  setSearch = {this.setSearch}/>
        <div className = "browser">
          <Video video = {this.getSelected()}/>
          <SearchResult videos = {this.getVideos()} selectVideo = {this.selectVideo}/>
        </div>
      </div>
    )
  }
}

export default App;
