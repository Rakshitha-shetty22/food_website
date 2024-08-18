import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //this is the object
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { name, photo} = this.props;
    return (
      <div className="detailsContainer">
        <h2>Name : {name}</h2>
        <h3>Location: Manglore</h3>
        <p>{this.state.count}</p>
        <p>{this.state.count2}</p>
      <img src={photo}/>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click{" "}
        </button>
      </div>
    );
  }
}
export default UserClass;
