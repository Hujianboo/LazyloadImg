import * as React from 'react';
import { connect } from "react-redux";
import increaseAction from "./store/action";

function mapStateToProps(state) {
  return {
    value: state.count
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  };
}
const debounce = (func,time) => {
  let timer = null
  return () => {
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func()
    },time)
  }
}
const throttle = (func,time) => {
  let timer = null
  return () => {
    if(timer){
      return;
    }
    timer = setTimeout(() => {
      func()
      timer = null
    },time)
  }
}
const Hello = ({value,onIncreaseClick}) => {
  return(
    <>
    <div onClick={onIncreaseClick}>{value}</div>
    <button onClick={debounce(() =>{console.log('debounce')},2000)}>防抖</button>
    <button onClick={throttle(() =>{console.log('throttle')},2000)}>节流</button>
    </>

  )
}
export default connect(mapStateToProps,mapDispatchToProps)(Hello)