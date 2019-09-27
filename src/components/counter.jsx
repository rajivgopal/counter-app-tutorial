import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

class Counter extends Component {
  render() {
    const { onIncrement, onDelete } = this.props;
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <br />
      </>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

const s = (state, ownProps) => {
  return {
    counter: ownProps.counter
  };
};
const d = dispatch => {
  return {
    onIncrement: counter => dispatch(actions.onIncrement(counter)),
    onDelete: counterId => dispatch(actions.onDelete(counterId))
  };
};
export default connect(
  s,
  d
)(Counter);
