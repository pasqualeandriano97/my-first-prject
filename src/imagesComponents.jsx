import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <img
        className={this.props.stile ? "images " + this.props.stile : "images"}
        src={this.props.src}
        alt={this.props.alt}
      />
    );
  }
}

export default ImageComponent;
