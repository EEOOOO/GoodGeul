import React from 'react';
class MyBooks extends React.Component{
    const title = this.props.sayHello;
    render(){
        return <h1>{this.props.sayHello}</h1>;
    }
}
export default MyBooks;