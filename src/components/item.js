import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "../../src/css/item.css";

class Item extends Component {
    state = {  }
    render() { 
        return (
            <div className="card"> 
                <div className="image">
                    <img src={this.props.game.background_image} alt={this.props.game.name}></img>
                </div>
                <div className="game_content">
                    <h3>{this.props.game.name}</h3>
                    <h2 className="price">${this.props.game.price}</h2>
                    <Link to={{
                        pathname: `/item/${this.props.game.id}`, 
                        state: {game: this.props.game}
                        }} >
                        <button className="view">View</button>
                    </Link>
                </div>
            </div> 
        );
    }
}
 
export default Item;