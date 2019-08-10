import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const localCounters = [...this.state.counters];
    const index = localCounters.indexOf(counter);
    localCounters[index] = { ...counter };
    localCounters[index].value += 1;
    this.setState({ counters: localCounters });
  };

  handleDelete = counterId => {
    const localCounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: localCounters });
  };

  handleReset = () => {
    const localCounters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: localCounters });
  };

  render() {
    return (
      <>
        <Navbar
          totalCounts={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </>
    );
  }
}

export default App;
