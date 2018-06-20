import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import CardBody from "./components/CardBody"

class App extends Component {
  // Setting this.state.friends to the friends json friends
  state = {
    friends,
    count: 0,
    highScore: 0
  };


  // Attach increment function to onclick function here
  handleIncrement = () => {
   
    this.setState({ count: this.state.count + 1 });
    // this.setState({ highScore: this.state.highScore + 1});
    this.setState({cardGuessed: this.state.friends.clicked})
  };

  shuffle = () => {
    var currentIndex = this.state.friends.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {  
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = friends[currentIndex];
      friends[currentIndex] = friends[randomIndex];
      friends[randomIndex] = temporaryValue;
    }
  
    return friends;
  }
  
  setHighScore = () => {
    if (this.state.count > this.state.highScore) {
      this.setState({highScore: this.state.count}, function() {
        console.log(this.state.highscore);
      });
    }
  }

  handleClick = () => {
    if (this.state.friends.clicked === true) {
    this.setState({count: 0})
    console.log(this.state.friends.clicked);
  } 
  else {
    this.setState({clicked: true});
  }
}
  reset = () => {
    this.setState({count: 0});
  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    this.shuffle();
    return (
      <Wrapper>
        <Title>Friends List
       <CardBody  count={this.state.count}
                  highScore={this.state.highScore}
                  reset={this.reset}
                  />
        </Title>
        {this.state.friends.map(friend => (
          <FriendCard
          // Put onclick function here
            removeFriend={this.removeFriend}
            id={friend.id}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
