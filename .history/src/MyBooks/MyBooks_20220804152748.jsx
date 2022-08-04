import React from 'react';
class MyBooks extends React.Component{
    constructor(props){
        super(props);
        this.conTitle = this.props.sayHello + 'Reaaly';
    }
    title(){
        return this.props.sayHello
    }
    render(){
        return <h1>{this.title()} <p>{this.conTitle}</p></h1>;
    }
}
export default MyBooks;