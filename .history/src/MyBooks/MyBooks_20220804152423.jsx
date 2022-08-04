import React from 'react';
class MyBooks extends React.Component{
    render(){
        const title = {this.props.sayHello};
        return <h1>{title}</h1>;
    }
}
export default MyBooks;