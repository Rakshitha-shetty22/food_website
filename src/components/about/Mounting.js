// import React, { Component } from 'react';

// class ChildComponent extends Component {
//   constructor() {
//     super();
//     console.log('ChildComponent Constructor');
//   }

//   componentDidMount() {
//     console.log('ChildComponent componentDidMount');
//   }

//   render() {
//     {console.log("child render")}
//     return <div></div>;
//   }
// }

// class ParentComponent extends Component {
//   constructor() {
//     super();
//     console.log('ParentComponent Constructor');
//   }

//   componentDidMount() {
//     console.log('ParentComponent componentDidMount');
//   }

//   render() {
//     return (
//       <div>
//         {console.log("parent render")}
//         <h1></h1>
//         <ChildComponent />
//       </div>
//     );
//   }
// }

// export default ParentComponent;


//The duplicate logs in console you're seeing are due to the behavior of React in development mode. 
//Specifically, React's StrictMode causes components to render twice to help identify potential 
//side effects in your code. 

//if one instance of the class then output will be 
//--ParentComponent Constructor
//--parent render
//--ChildComponent Constructor
//--child render
//--child componentDidMount     //DOM manipulatn
//--parent componentDidMount    //DOM manipulatn

//if we have 2 instance then

import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor() {
    super();
    console.log('ChildComponent Constructor');
  }

  componentDidMount() {
    console.log('ChildComponent componentDidMount');
  }

  render() {
    return <div>{console.log("child render")}</div>;
  }
}

class ParentComponent extends Component {
  constructor() {
    super();
    console.log('ParentComponent Constructor');
  }

  componentDidMount() {
    console.log('ParentComponent componentDidMount');
  }

  render() {
    return (
      <div>
        {console.log("parent render")}
        <ChildComponent />
        <ChildComponent />
      </div>
    );
  }
}

export default ParentComponent;

//--ParentComponent Constructor
//--parent render
//--ChildComponent Constructor (1st)
//--child render               (1st)
//--ChildComponent Constructor (2nd)
//--child render               (2nd)
//--child componentDidMount    (1st)
//--child componentDidMount    (2nd)
//--parent componentDidMount

//becz of 2 children react optimizes... so the render of 2 children will happen in batch wise
//then the comit phase of 2 children is done. becz the dom manipulation is most expensive thing when we are updating or loading componet and it takes a time.
//so render phase is too fast becz of reconcilation cycle and dom update is takes time so it batches the comit phase.