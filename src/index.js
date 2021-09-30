import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import './NavigationTab.css'
// import './HomePage.css'
import App from './App';
import store from "./store"

const render = ()=>{
	ReactDOM.render(
		<React.StrictMode>
				<App store = {store}/>
		</React.StrictMode>
	,
		document.getElementById('root')
	)
}
// ReactDOM.render(

// 	<React.StrictMode>

// 			<App store = {store}/>

// 	</React.StrictMode>
// ,
// 	document.getElementById('root')
// );

store.subscribe(render);
render();

