import React from 'react';
class MyBooks extends React.Component{
    title(){
        return this.props.sayHello
    }
    render(){
        return <h1>{title()}</h1>;
    }
}
export default MyBooks;