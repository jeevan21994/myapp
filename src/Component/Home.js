
import React from 'react'
// import {Navbar,Nav,NavItem ,NavLink} from 'reactstrap';
// import User from '../UserPages/User';
import Sidebar from "../Layout/Sidebar";
const Home = () => {
  
    return (
    <div>
      <div className="list">
        <Sidebar />
        {/* <User/> */}
      </div>
  </div>
    )
}

export default Home;

 /* <Navbar color="dark" light expand="md">
       <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="btn btn-warning mr-2">
                 <Link to="/">Home</Link>
                 Home
                 </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="btn btn-warning mr-2">
                <Link to="/about">About</Link>
                About
                </NavLink>
            </NavItem>
          </Nav>
      </Navbar> */

// import React, {useState} from 'react';
// // ui component for page layout
// import Header from '../Layout/header';
// import Sidebar from '../Layout/sidebar';


// const Home = () => {
//   // const { history } = children.props;

//   const [sidebarToggled, setSidebarToggle] = useState(false);
//   const [resSidebarToggled, setResSidebarToggle] = useState(false);
//   const [currentTheme, setCurrentTheme] = useState('dark-theme');

//   const changeTheme = () => {
//     const theme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
//     if (theme !== currentTheme) setCurrentTheme(theme);
//   };

//   return (
//      <>
//       <div className={`App sidebar-mini rtl ${currentTheme} ${sidebarToggled ? 'sidenav-toggled' : '' } ${resSidebarToggled ? 'left_sidebar_visible' : ''}`} >

//         <Header  sidebarToggled={sidebarToggled} resSidebarToggled={resSidebarToggled} setSidebarToggle={setSidebarToggle} setResSidebarToggle={setResSidebarToggle} />

//         <Sidebar setResSidebarToggle={setResSidebarToggle} changeTheme={changeTheme}/>
// </div>
//      </>
//   );
// };

// export default Home;







// "scripts": {
//   "start": "REACT_APP_ENV=development react-scripts start",
//   "build:staging": "REACT_APP_ENV=staging react-scripts build",
//   "build:production": "REACT_APP_ENV=production react-scripts build",
//   "build": "REACT_APP_ENV=staging react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// },


// config.js
// export const BASE_URL = () => {
//   let url;
//    {
//     url = 'https://vs-stage-api.bitcotapps.com'
//    }
   
//   return url;
// };