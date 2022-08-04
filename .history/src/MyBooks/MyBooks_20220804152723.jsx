import React from 'react';
class MyBooks extends React.Component{
    constructor(props){
        super(props);
        let conTitle = this.props.sayHello;
    }
    title(){
        return this.props.sayHello
    }
    render(){
        return <h1>{this.title()} <p>{this.conTitle}</p></h1>;
    }
}
export default MyBooks;