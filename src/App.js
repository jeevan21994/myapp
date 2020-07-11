// import { Logout } from "./Component/Logout";
// import Sidebar from "./Layout/Sidebar";
// import EditUser from "./UserPages/EditUser";
// import {connect} from 'react-redux'
// import {useSelector , useDispatch} from 'react-redux'
// import {anotherName} from './Redux/Action/action'

  import React , {useEffect} from "react";
  import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
  import "./App.css";
  import Home from './Component/Home'
  import AddUser from './UserPages/AddUser';
  import { Login } from "./Component/Login";
  const App = () => {
   useEffect(()=>{
     add()
   })

   const add =()=>{
    let a=10
    // let a=20
    console.log(a)
   }
  return (
    <>
    
      <Router>
              <>
                 <Switch>
                     <Route exact path="/home" component={Home} />
                     <Route  path="/login" component={Login}/>
                     <Route path='/adduser' component={AddUser}/>
                     {/* <Route path='*' component={PageNotFound}/> */}

                 </Switch>
               </>
             </Router>
    </>
  );
};

export default App;


/* 
     <div className="container">
      <div className="row">
        <h3>my name is :{data.name}</h3> 
             {props.Myname} mapStateToProps
             <button type="button" onClick = { () => {props.changeName ('lakhan')}} className="btn btn-primary">change name</button>
             <button type="button" onClick = { () => {dispatch(anotherName())}} className="btn btn-primary">change name</button>
       </div>

      <div className="row">
        {myNameArr}
      </div>
    </div> */


  //   console.log(props.MynameArr)
  //  const dispatch = useDispatch()
   
  //state get
  //  const  data = useSelector((state)=>{
  //   return state
  //  })

    //array get
    //  const  Mywish = useSelector((state)=>{
    //   return state.wishes
    //  })
    // const myNameArr=data.wishes.map(item=>{
    //      return <h3 key={Math.random()}>{item}</h3> 
    //     })



//     const mapStateToProps = (state) =>{
//     console.log(state)
//     return {
//       Myname :state.name,
//       MynameArr :state.wishes
//       }
//     }

// const mapDisptchToProps =(dispatch)=>{
//   return {
//     changeName : (name) => { dispatch (anotherName(name)) }
//   }
// }

// export default connect(mapStateToProps ,mapDisptchToProps) (App);
// export default App;








//       import React from 'react';
//       import './App.css';
//       // import Home from './Component/Home'; { Suspense,lazy } 
//       // import Parent from './Component/Parent';
//       // import Practice from './Component/Practice';
//       import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//       import AddUser from './UserPages/AddUser';
//       import 'bootstrap/dist/css/bootstrap.min.css';
//       import Image from './Component/Image';
//       // import image1 from './Assets/download.jpg';
//       import ErrorBoudary from './Router/ErrorBoudary'

  
//       /**redux method import */

//       // import *as action from './Redux/Action/action' //1
//       import {anotherName,addwish} from './Redux/Action/action' //2 
//       import {connect} from 'react-redux'


//       /**redux method end */

//     //code splitting/lazy loading and load faster
//       import Loadable from 'react-loadable';
//       const Home = Loadable({
//         loader: () => import(/*webpackChunk:"home component"*/'./Component/Home'),
//         loading: ()=><div>Loading..Home...</div>,
//       });

//       const About = Loadable({
//         loader: () => import(/*webpackChunk:"about component"*/'./Component/About'),
//         // loading: Loading, you put any component like spinner loader etc
//         loading: ()=><div>Loading..About...</div>,
//       });
    

//       function App(props) {
//         // const About =React.lazy(()=>import('./Component/About'))
//         // const About =lazy(/*"about component"*/()=>import('./Component/About'))
//         console.log(props)

//         // const mywish=props.mywish.map(item=>{
//         //  return <h3>{item}</h3> 
//         // })
//         return (
//           <>
//               <Router>
//               <div>
//                 <Switch>
//                     <Route exact path="/" component={Home} />
//                     <Route path='/adduser' component={AddUser}/>
//                     <Route path='/about' component={About}/>
//                 </Switch>
//               </div>
//             </Router>

//             {/* BY REDUX USE CHANGE NAME */}
//             {/* {mywish}
//           <h3>My Name Is :{props.myname}</h3>
//           <button className="btn btn-primary" onClick={()=>{props.changeName('suresh')}}>Change It</button>
//           <button className="btn btn-primary" onClick={()=>{props.addwish()}}>add Wish</button> */}

          
//             {/* Error Boudary use */}
//             <ErrorBoudary>
//             {/* <Image image1={image1} width="50px" height="50px"/> */}
//             <Image image1="No Image"/>
//             </ErrorBoudary>


//           {/* code splitting/lazy  */}
//             {/* <Suspense fallback={<div>Loading.....</div>}>
//             <About></About>
//           </Suspense> */}
//             </>
//         );
//       }


      
// const mapStateToProps=(state)=>{
//   //return as props
//   return{
//     myname:state.name,
//     mywish:state.wish
//   }
// }

// //update name
// const mapDisptchToProps=(dispatch)=>{
//   return{
//     //method
//     changeName:(name)=>{dispatch(
//       // action.anotherName(name) 1
//         anotherName(name) //2
//       // without import function
//       // {type:'CHANGE_NAME', payload:name}
//       )},
//       addwish:()=>{
//         dispatch(addwish())
//       }
//   }
// }  
// //connect to app and pass as a arg mapStateToProps
//                       //display        change name
// export default connect(mapStateToProps,mapDisptchToProps)(App);

























      // import logo from './logo.svg';
      // <img src={logo} className="App-logo" alt="logo" />
      // <p>
      //   Edit <code>src/App.js</code> and save to reload.
      // </p>
      // <a
      //   className="App-link"
      //   href="https://reactjs.org"
      //   target="_blank"
      //   rel="noopener noreferrer"
      // >
      //   Learn React
      // </a>


      // using props use object array and simple msg
          //  const students=[ 
          //  {name:"aman0" ,age:150},
          //  {name:"aman1" ,age:151},
          //  {name:"aman2" ,age:152}
          //  ]
                /* <Parent name="raj" 
                data={{name:"aman" ,age:15}}
                students={students}/> */



//                 /* render props with state */
//                 /* <Practice   
//             render={data => {
//               return (
//                 <div>
//                   <ul>
//                     {data.map(el => (
//                       <li key={el.id}>{el.name}</li>
//                     ))}
//                   </ul>
//                 </div>
//               );
//             }}
//           /> */

          //lazy loading
      // import React , { Suspense,lazy }from 'react';

        // function App()
        // const About =React.lazy(()=>import('./Component/About'))
        // or
        // const About =lazy(/*"about component"*/()=>import('./Component/About'))

        // return
//         /* <Suspense fallback={<div>Loading.....</div>}>
//             <About></About>
//           </Suspense> */