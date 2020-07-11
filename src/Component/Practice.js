

import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return data;
}


// Can I use render props with React hooks?

// import React, { useState, useEffect } from "react";

// export default function Practice(props) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users/")
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []); // << super important array

//   return props.render(data)
// }








// render props with state 

// import React, { Component } from "react";
// export default class Practice extends Component {
//   state = { data: [] };
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users/")
//       .then(response => response.json())
//       .then(data =>
//         this.setState(() => {
//           return { data };
//         })
//       );
//   }
//   render() {
//     return this.props.render(this.state.data);
//   }
// }












//hook update

// import React, { useState } from "react";
// export default function Button() {
//   const [buttonText, setButtonText] = useState("Click me, please");
//   return (
//     <button onClick={() => setButtonText("Thanks, been clicked!")}>
//       {buttonText}
//     </button>
//   );
// }







//class state update

// import React, { Component } from "react";
// export default class Button extends Component {
//   constructor() {
//     super();
//     this.state = { buttonText: "Click me, please" };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState(() => {
//       return { buttonText: "Thanks, been clicked!" };
//     });
//   }
//   render() {
//     const { buttonText } = this.state;
//     return <button onClick={this.handleClick}>{buttonText}</button>;
//   }
// }