import React from "react";

function cardContainer(props) {
  return (
    <div>
       <div className="container" onClick={() => this.props.handler(this.props.id)}>
                    <div className="img-container">
                        <img alt="memory game" src={this.props.image} />
                    </div>
                </div>
    </div>
  );
}

export default cardContainer;