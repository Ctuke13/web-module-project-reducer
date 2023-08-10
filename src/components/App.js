import React from "react";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

import { useReducer } from "react";
import { reducer, initialState } from "../reducers";
import {
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  mPlus,
  mR,
  mC,
} from "../actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleAddOne = () => {
  //   return dispatch(addOne());
  // };

  const handleApplyNumber = (e) => {
    const number = parseInt(e.target.value);
    return dispatch(applyNumber(number));
  };

  const handleOperator = (e) => {
    const operator = e.target.value;
    return dispatch(changeOperation(operator));
  };

  const handleClear = (e) => {
    return dispatch(clearDisplay());
  };

  const handleMPlus = () => {
    const currentTotal = state.total;
    return dispatch(mPlus(currentTotal));
  };

  const handleMR = () => {
    const currentMemory = state.memory;
    return dispatch(mR(currentMemory));
  };

  const handleMC = () => {
    return dispatch(mC());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton onClick={handleMPlus} value={"M+"} />
              <CalcButton onClick={handleMR} value={"MR"} />
              <CalcButton onClick={handleMC} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyNumber} value={1} />
              <CalcButton onClick={handleApplyNumber} value={2} />
              <CalcButton onClick={handleApplyNumber} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyNumber} value={4} />
              <CalcButton onClick={handleApplyNumber} value={5} />
              <CalcButton onClick={handleApplyNumber} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyNumber} value={7} />
              <CalcButton onClick={handleApplyNumber} value={8} />
              <CalcButton onClick={handleApplyNumber} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={handleOperator} value={"+"} />
              <CalcButton onClick={handleOperator} value={"*"} />
              <CalcButton onClick={handleOperator} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClear} value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
