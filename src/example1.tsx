import React from 'react';

// EXAMPLE OF A CLASS COMPONENT WITH TYPESCRIPT

interface AppProps {
    color?: string;
}

class Counter extends React.Component<AppProps>{
    state = {counter: 0}

    onUp = ():void => {
        this.setState({counter: this.state.counter +1})
    }

    onDown = ():void => {
        this.setState({counter: this.state.counter -1})
    }
    render(){
        return (
            <div>
                <button onClick={this.onUp}>+</button>
                {this.state.counter}
                <button onClick={this.onDown}>-</button>
            </div>
        );
    }
}

export default Counter;