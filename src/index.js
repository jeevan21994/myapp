    
    import React from 'react';
    import ReactDOM from 'react-dom';
    // import { Router, Route, Link } from 'react-router-dom';
    // import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

    import './index.css';
    import App from './App';
    // import Main from './Router'
    import 'react-table-6/react-table.css'
    import 'bootstrap/dist/css/bootstrap.min.css';
    import * as serviceWorker from './serviceWorker';
    import {createStore ,applyMiddleware ,compose} from 'redux'
    import {Provider} from 'react-redux'
    import reducer from './Redux/Reducer/reducer'
    import thunk from 'redux-thunk' //applyMiddleware pass npm install redux-thunk 
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //compose pass dev tools extension
    const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)))
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    // ReactDOM.render(
    //     <Main />,
    //      document.getElementById('root'));

    serviceWorker.register();










    
    
    /**
     * npm install redux react-redux
     * npm install redux-thunk
     * 
     * create store  //lives state in store and initialize reducer
    create Provider // connect react to redux
    create reducer // make use state and action
    create devtool  // extention compose
    create thunk // middilewarw
    combine reducer // mutiple reducer use
     */
    
    
    
    
    
    
    // import React from 'react';
    // import ReactDOM from 'react-dom';
    // import './index.css';
    // import App from './App';
    // import * as serviceWorker from './serviceWorker';
    // import 'react-table-6/react-table.css'
    // // import 'font-awesome/css/font-awesome.min.css';
    // import 'bootstrap/dist/css/bootstrap.min.css';
    // import axios from 'axios';
    // // default base url of api
    // import { BASE_URL } from './Api/Config.js';



    // /**redux use*/
    // import {createStore , applyMiddleware, compose ,combineReducers} from 'redux'
    // //create provide communicate react and redux
    // // import {Provider} from 'react-redux'

    // //import thunk middileware npm install redux-thunk
    // import thunk from 'redux-thunk' //applyMiddleware pass 

    // //import reducer and use in store
    // import reducer from './Redux/Reducer/reducer'
    // import wishReducer from './Redux/Reducer/wishReducer'

    // //combine reducer(use multiple reducer )
    // const masterReducer = combineReducers({
    //     name:reducer,
    //     wish:wishReducer
    // })
 
    
    // //devtools access nhi chahiye to only pass applyMiddleware(thunk) in store
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //compose pass
    // // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    // const store=createStore(masterReducer,{name:'mohan',wish:['eat','sleep']},composeEnhancers(applyMiddleware(thunk)))

    
    // // set default headers and options of axios for api request
    // axios.defaults.baseURL = BASE_URL;
    // ReactDOM.render(<App /> , document.getElementById('root'));

    // ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));














    // ReactDOM.render(
    //   <React.StrictMode>
    //     <App />
    //     {/* <User
    //     date={comment.date}
    //     text={comment.text}
    //     author={comment.author}
    //   />, */}
    //   </React.StrictMode>,
    //   document.getElementById('root')
    // );


    serviceWorker.unregister();


    //image
    // function Avatar(props) {
    //   return (
    //     <img
    //       className="Avatar"
    //       src={props.user.avatarUrl}
    //       alt={props.user.name}
    //     />
    //   );
    // }

    // //name
    // function UserInfo(props) {
    //   return (
    //     <div className="UserInfo">
    //       <Avatar user={props.user} />
    //       <div className="UserInfo-name">    
    //           {props.user.name}
    //       </div>
    //     </div>
    //   );
    // }

    //text
    // function User(props) {
    //   return (
    //     <div className="Comment">
    //       {/* {props.author.name} */}
    //       {/* <UserInfo user={props.author} /> */}
    //       <div className="Comment-text">    
    //          {props.text}
    //       </div>
    //       <div className="Comment-date">
    //         {formatDate(props.date)}
    //       </div>
    //     </div>
    //   );
    // }

    // const comment = {
    //   date: new Date(),
    //   text: 'I hope you enjoy learning React!',
    //   author: {
    //     name: 'Hello Kitty',
    //     avatarUrl: 'https://placekitten.com/g/64/64',
    //   },
    // };

    // //date
    // function formatDate(date) {
    //   return date.toLocaleDateString();
    // }
