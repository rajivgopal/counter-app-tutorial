import React from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import Counter from "./counter";

const Counters = ({ onResetCounter, counters }) => {
  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={onResetCounter}>
        Reset
      </button>
      <br />
      {counters.map(counter => (
        <Counter key={counter.id} counter={counter} />
      ))}
    </div>
  );
};

const s = state => {
  return {
    counters: state.counters
  };
};

const d = dispatch => {
  return {
    onResetCounter: () => dispatch(actions.onResetCounter())
  };
};

export default connect(
  s,
  d
)(Counters);
