import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img className="images" src={this.props.src} alt={this.props.alt} />;
  }
}

export default ImageComponent;
