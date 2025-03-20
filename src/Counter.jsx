import React from 'react';

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = { count: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(
            (prevState) => ( {count: prevState.count + 1} ),
            () => {
                console.log('Состояние обновлено! Текущее состояние: ', this.state.count);
            }
        );
    }

    render(){
        return (
            <div>
                <p>Counter: {this.state.count}</p>
                <button onClick={this.handleClick}>inr to counter</button>
            </div>
        );
    }
}

export default Counter;
