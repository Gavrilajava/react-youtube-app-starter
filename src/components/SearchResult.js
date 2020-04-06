import React from 'react'

export default class SearchResult extends React.Component{

  renderItem = (video) => {
    return(
      <div className = "item">
        <img onClick = {() => this.props.selectVideo(video.id.videoId)} src = {video.snippet.thumbnails.medium.url} alt = {video.snippet.title}></img>
        <div className = "title-desc">
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    )
  }


  render(){
    return(
      <div className="search-result">
        {this.props.videos.map(video => this.renderItem(video))}
      </div>
    )
  }
}