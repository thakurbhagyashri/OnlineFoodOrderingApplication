import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
    //   count: 0,
    //   count2:1,
    userInfo:{
        login:"bhagya",
        location:"pune",
        avatar_url:"https://avatars.githubusercontent.com/u/129747293?v=4",
    },
    };
  }
 async componentDidMount()
  {
    console.log("component mounted");
    const data=await fetch("https://api.github.com/users/thakurbhagyashri");
    const result=await data.json();
    this.setState({
        userInfo:result,
    })
    console.log(result);
  }
  render() {
    // const { name, location } = this.props;
    const { count, count2 } = this.state;
    const{login, location,avatar_url}=this.state.userInfo
    return (
      <div className="user-card">
        {/* <h1>Count:{count}</h1> */}
        {/* <button onClick={()=>{
            // Never update state variable directly, it will cteate inconsistency in our code, recat provide below method to update the valiue of variable /below method consist of object
            this.setState({count:this.state.count+1})
        }}>+</button> */}
        {/* <h1>Count:{count2}</h1> */}
        <h3>Name:{login}</h3>
        <p>Location:{location}</p>
        <img src={avatar_url}/>
        <p>This is namaste react web series</p>
      </div>
    );
  }
}
export default UserClass;
// its a class based componets is a  class that return  some peace of jsx
// and this code return into to the render method.
// its a basically a class given by react, we will have to import it and it will come from the react, it has a package provided by the react
// we  woill also export  the dafault component and used the same  way like we are using the functional compon.
