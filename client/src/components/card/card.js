import React from "react";

function card(props) {
  return (
    <div>
       <div className="card" onClick={() => this.props.handler(this.props.id)}>
                    <div className="img-container">
                        <img alt="memory game" src={this.props.image} />
                    </div>
                </div>
    </div>
  );
}

export default card;