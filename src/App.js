import logo from './logo.svg';
import './App.css';
import Item from './MyItem';
import React from 'react';


class Title extends React.Component{
  render(){
    return(
      <div className='title'>
        <h1>Starwars Character</h1>
        <p>React.js Project</p>
      </div>
    )
  }
}

class Starwars extends React.Component{
  constructor(){
    super()
    this.state = {
      name : null,
      height: null,
      homeworld: null,
      image : null,
    }
  }

  getNewCharacter(){
    const randomChar = Math.round(Math.random() * 88)
    const url = `https://akabab.github.io/starwars-api/api/id/${randomChar}.json`
    fetch(url)
      .then(response => response.json())
      .then(data =>{
        // console.log(data)
        console.log(data.image)
        this.setState({
          name : data.name,
          height : data.height,
          homeworld : data.homeworld,
          image : data.image,
        })
      })
  }
  render(){
    return(
      <div className='Char'>
        <h2>Name : {this.state.name}</h2>
        <p>Height: {this.state.height} cm</p>
        <img src={this.state.image}></img>
        <button type="button" onClick={() => this.getNewCharacter()} className="btn">Randomize Character</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Title />
       <Starwars />
      </header>
    </div>
  );
}

export default App;
