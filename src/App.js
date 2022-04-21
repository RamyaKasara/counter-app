import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    //console.log("Deleted", counterId);
    const counters = this.state.counters.filter((ele) => ele.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((ele) => {
      ele.value = 0;
      return ele;
    });

    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    let countersList = [...this.state.counters];
    const index = countersList.indexOf(counter);
    countersList[index].value++;
    this.setState({ counters: countersList });
    //console.log(this.state.value);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalNumber={
            this.state.counters.filter((ele) => ele.value > 0).length
          }
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
