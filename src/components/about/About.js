import React from 'react'
import UserClass from "./UserClass";
import Mouting from './Mounting'
import UserContext from '../../common/UserContext';

class About extends React.Component{
    
constructor(){
    super();
    this.state = {
        data: "raksh",  //here given the value(raksh)... becz initial loading we will get the error if write null or u can show the shimmer UI.
    }
}
async componentDidMount(){
  const data = await fetch ('https://api.github.com/users/Raksh-shetty');
  const jsondata = await data.json();
  this.setState({
    data: jsondata,
  })
}
componentDidUpdate(){
  console.log("updated");  //it executes after the update(after we get data from fetch) 
}
componentWillUnmount(){
  console.log("clear");   //it executes when we move to other page.
}
 render() {
  const { data } = this.state;
    return(
        <div>
          <UserContext.Consumer>
          {({ loggedUser }) => <h1>{loggedUser}</h1>}
          </UserContext.Consumer>
        <p>
          Welcome to namaste Food website, your ultimate destination for a
          delightful food ordering experience! We are dedicated to bringing you a
          wide array of mouth-watering dishes from the best restaurants and
          eateries in your area, delivered straight to your doorstep with just a
          few clicks.
          <h3>Our Mission </h3>
          At namaste Food website, our mission is to make delicious food
          accessible and convenient for everyone. We believe that great food
          should be enjoyed without the hassle of cooking or the inconvenience of
          dining out. Our platform connects you with a variety of culinary
          delights, ensuring there's something for every taste and craving.
          <h3>Why Choose Us?</h3>
          Variety of Choices: From local favorites to international cuisines, our
          extensive menu options cater to diverse tastes and preferences. Quick
          and Easy: Our user-friendly interface makes browsing, selecting, and
          ordering your favorite dishes a breeze. Fast Delivery: We partner with
          reliable delivery services to ensure your food arrives hot and fresh,
          right on time. Quality Assurance: We work with trusted restaurants that
          maintain high standards of hygiene and food quality.
        </p>
        {/* <User {...this.data.name}/> */}
        <UserClass name={data.name} photo={data.avatar_url}/>
        <Mouting />
      </div>
    )
 }
}
 export default About;