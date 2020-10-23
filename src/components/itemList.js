import React, { Component } from 'react';
import Item from './item'
import "../css/itemList.css"


class ItemList extends Component {
    state = { 
        itemList: [],
        elementOn: 10,
        fullItemList: []
    }
    componentDidMount() {
        fetch(`http://localhost:3000/items`)
        .then(res => res.json())
        .then(listOfGames => {
            this.setState({
                fullItemList: listOfGames,
                itemList: listOfGames.slice(0, 10)
            })
        })
        .catch(err => {
            console.error(err);
        });
    }
    nextPage = () => {
        if (this.state.elementOn !== this.state.fullItemList.lenght){
            let copyOfItems = this.state.fullItemList.slice(this.state.elementOn, this.state.elementOn+10)
            this.setState({
                itemList:  copyOfItems,
                elementOn: this.state.elementOn + 10
            })
        }
    }
    previousPage = () => {
        let elementOn = this.state.elementOn
        if (elementOn > 10){
            let copyOfItems = this.state.fullItemList.slice(elementOn-20, elementOn-10)
            this.setState({
                itemList:  copyOfItems,
                elementOn: elementOn - 10
            })
        }
        else{
            console.log("cant go back")
        }
    }
    render() { 
        let listOfGames = this.state.itemList.map(gameObj => {
            return <Item key={gameObj.id} game={gameObj} />
        })
        // debugger
        // console.log(this.state.itemList)
        return ( 
        <div>
            <div className="container">{listOfGames}</div>
            <div className="buttons">
                <button className="left_button" onClick={this.previousPage}>
                    Back
                </button>
                <button className="right_button" onClick={this.nextPage}>
                    Next
                </button>
            </div>
        </div> );
    }
}
 
export default ItemList;