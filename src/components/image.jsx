import React, { Component } from 'react';


//Increase or Descrease by this value
const countBy = 20;

class Image extends Component {

    //To Do: move this to another component, and call them instead of put the values here
    state = {
        //Make the image size by default to 40px
        h: 40,
        w: 40,
        ImgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        ImgUrl2: "http://webmeup.com/upload/blog/lead-image-105.png"
    };


    //#region //Don't know how to functions to another components
    HandleImageIncrease = () => {
        this.setState({ h: this.state.h + countBy });
        this.setState({ w: this.state.w + countBy });
    }
    HandleImageDecrease = () => {
        this.setState({ h: this.state.h - countBy });
        this.setState({ w: this.state.w - countBy });
    }
    //#endregion


    render() {

        return (
            <div>

                <img src={this.state.ImgUrl} width={this.state.w} height={this.state.h} /><span></span>
                <img src={this.state.ImgUrl2} width={this.state.w} height={this.state.h} />
                <br></br>
                <button onClick={this.HandleImageIncrease}>Increase Image</button>
                <button className="buttonDecrease" onClick={this.HandleImageDecrease}>Decrese Image</button>
            </div>
        );
    }
}
export default Image;