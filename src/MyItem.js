import React from "react";

class Item extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            clicks: 0,
            totalRemaining: 10
        }
    }
    
    clickMe(){
        this.setState({
            clicks: this.state.clicks + 1,
            totalRemaining: this.state.totalRemaining - 1
        })
        if(this.state.totalRemaining <= 0){
            alert("You clicked too much")
            this.setState({
                totalRemaining: 0
            })
        }
    }
  
    render(){
        return (
            <div>
                <h1 onClick={() => this.clickMe()}> 
                    Hello World {this.props.name}
                </h1>
                <span>Clicks of {this.props.name}: {this.state.clicks}, {this.state.totalRemaining}</span>
            </div>
        )
    }
}

export default Item;