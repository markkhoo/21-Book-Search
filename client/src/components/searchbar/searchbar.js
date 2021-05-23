import React from "react";

function Searchbar(props) {
    
  
    return (
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" value={props.searchTerm}/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
        </div>
    );
  }
  
  export default Searchbar;

