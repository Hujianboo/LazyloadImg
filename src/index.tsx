import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counter from './store/reducer';
import { LazyLoadingImgContainer } from './LazyLoadImgContainer';
import Hello from './Hello'
interface AppProps { }
interface AppState {
  name: string;
}

const store = createStore(counter)
class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React Name'
    };
  }

  render() {
    return (
      <Provider store={store}>
        {/* <div>{this.state.name}<Hello/></div> */}
        <LazyLoadingImgContainer/>
      </Provider>
    )
  }
}

render(<App />, document.getElementById('root'));