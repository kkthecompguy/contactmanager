import React, { Component } from 'react'

class Test extends Component {

  state = {
    title: '',
    body: ''
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body
      }))
  }

  // componentWillMount() {
  //   console.log('componentWillMount...')
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate...')
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate....')
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate...')
  // }


  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps...')
  // }


  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test;
