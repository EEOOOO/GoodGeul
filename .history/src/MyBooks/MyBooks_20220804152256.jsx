import React from 'react';
class MyBooks extends React.Component{
    render(){
        this.props.sayHello();
        return <h1>Hi</h1>;
    }
}
export default MyBooks;