import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        // if(this.props.image1 === "No Image"){
        //     throw new Error("Image Not Found")
        // }
        return (
            <div>
                <img src={this.props.image1} width="300px" alt=""/>
            </div>
        )
    }
}
