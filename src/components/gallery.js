import React, { Component } from "react";

class Gallery extends Component {
    render(){
        let alternate = 'https://images.app.goo.gl/8XBtLWGjS2JBCspGA'
        return(
            <div className="container">
                <div className="row">
                {this.props.items.map((item, index) => {
                    let {title, imageLinks, infoLink} = item.volumeInfo;
                        return(
                            <a href={infoLink} target="_blank" key={index} className="book">
                                <img src={imageLinks !== undefined ? imageLinks.thumbnail : alternate} 
                                alt="book-img"
                                className="bookImage"
                                 />
                                 <div className ="bbok-text">
                                    {title}
                                 </div>
                            
                            </a>
                        )
                    })
                }
                </div>         
            </div>
        )
    }
}

export default Gallery