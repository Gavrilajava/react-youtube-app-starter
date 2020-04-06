import React from 'react'

export default class Video extends React.Component{

  render(){

    if (!this.props.video){
      return null
    }
    else{
      const embedUrl = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
      return(
        <div className="video">
          <iframe src={embedUrl} />
          <h1>{this.props.video.snippet.title}</h1>
          <p>{this.props.video.snippet.description}</p>
        </div>
      )
    }
  }
}