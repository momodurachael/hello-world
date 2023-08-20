import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {

 return this.state.isLoggedIn && <div>welcome vishwas</div>

    // return this.state.isLoggedIn ? (
    //   <div>welcome vishwas</div>
    // ) : (
    //   <div>welcome Guest</div>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>welcome vishwas</div>;
    // } else {
    //   message = <div>welcome Guest</div>;
    // }

    // return <div>{message}</div>;

    // if (this.state.isLoggedIn) {
    //   return <div>welcome vishwas</div>;
    // } else {
    //   return <div>welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome vishwas</div>;
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
