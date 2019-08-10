import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 0 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 }
  //   ]
  // };

  // handleIncrement = counter => {
  //   const localCounters = [...this.state.counters];
  //   const index = localCounters.indexOf(counter);
  //   localCounters[index] = { ...counter };
  //   localCounters[index].value += 1;
  //   this.setState({ counters: localCounters });
  // };

  // handleDelete = counterId => {
  //   const localCounters = this.state.counters.filter(c => c.id !== counterId);
  //   this.setState({ counters: localCounters });
  // };

  // handleReset = () => {
  //   const localCounters = this.state.counters.map(c => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters: localCounters });
  // };

  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;

    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        <br />
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
