import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './card';
import ReactPlayer from 'react-player'
import {Link} from "react-router-dom"

import "../css/itemDetails.css"

class ItemDetails extends React.Component {
    state = { 
        game: {},
        screenshots: []
    }
    componentDidMount() {
        const game = this.props.location.state.game
        this.setState({
            game: game,
            screenshots: game.screenshots
        })
    }


    render() { 
        // debugger
        let items = this.state.screenshots.map(screenshot => {
            return <Card key={screenshot.index} img={screenshot}/>
        })    
        console.log(this.state.game)
        return (
            <div className="details">
                < h2 className="game_name">{this.state.game.name}</h2>
                <img className="game_image"src={this.state.game.background_image} alt=""/>
                <div className="box">  
                <hr/>
                    <div className="carusel">
                            <Carousel >{items}</Carousel>
                    </div>
                    <div className="video">
                        <ReactPlayer 
                            controls 
                            width="100%"
                            url={this.state.game.clip} 
                        />
                    </div>
                    <div className="block">
                        < h2 className="game_name">{this.state.game.name}</h2>
                        <h3>Estimated playtime: {this.state.game.playtime}</h3>
                        <h3>Top Rating: {this.state.game.rating_top}</h3>
                        <h3> Current rating: {this.state.game.rating}</h3>
                        <h3> Released date: {this.state.game.released}</h3>
                        <div className="add_to_cart">
                            <h3 className="price">${this.state.game.price}</h3>  
                            <Link to>
                                <button className="add">Add to cart</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div> 
            );
    }
}

export default ItemDetails;