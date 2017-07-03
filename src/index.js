import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
	    	<App />
	  	</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
// registerServiceWorker();