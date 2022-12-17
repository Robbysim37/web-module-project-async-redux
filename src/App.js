import React from 'react';
import { connect } from "react-redux"
import ClassList from './components/ClassList';
import './App.css';

function App(props) {
  return (
    <div>
      <div className="App">
        Async Redux Project
      </div>
      <ClassList></ClassList>
    </div>
  );
}

// generic form to follow below vvvv, this comes from D&DReducer.js

const mapStateToProps = state => ({
  test: state.test
})

export default connect(mapStateToProps,{})(App);