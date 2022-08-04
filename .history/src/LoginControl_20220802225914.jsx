import React from 'react';
class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClicked = this.handleLoginClicked.bind(this);
        this.handleLogoutClicked - this.handleLogoutClicked.bind(this);
        this.state = {isLoggedIn:false};
    }

    handleLoginClicked(){
        this.setState({isLoggedIn:true});
    }
    handleLogoutClicked(){
        this.setState({isLoggedIn:false});
    }
    render(){
        const isLoggedIn = this.setState({isLoggedIn:true});
        return (
        )
    }
}