import React from 'react'

export default class Search extends React.Component{

  constructor(){
    super()
    this.state = {
      search: ""
    }
  }

  changeState = (e) => this.setState({search: e.target.value})

  submitForm = (e) => {
    e.preventDefault()
    this.props.setSearch(this.state.search)
  }

  render(){
    return(
      <div className="search">
        <form onSubmit = {this.submitForm}>
          <input onChange = {this.changeState} type = "text"></input>
          <input type = "submit" value = "Search"></input>
        </form>
      </div>
    )
  }
}