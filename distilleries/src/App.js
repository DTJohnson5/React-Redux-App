import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getDistilleries} from './action/index';
import Distilleries from './components/Distilleries';

function App(props) {

  const applyDistilleries = () => {
    props.getDistilleries();
  }

  return (
    <div className="App">
      <div className="header">
      <h1 onClick={applyDistilleries}>Here are all the distilleries in your city!</h1>
      </div>
      <div>
      <Distilleries isFetching={props.isFetching} breweries={props.breweries} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return{
  breweries: state.breweries,
  state: state,
  isFetching: state.isFetching
  }
}

export default connect(
  mapStateToProps,
  {getDistilleries}
)(App);