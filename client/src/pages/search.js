import React, { useContext } from "react";
import Hero from "../components/hero"
import Nav from "../components/nav";
import Searchbar from "../components/searchbar";
import CardContainer from "../cardContainer";
function Search() {
    const [search, setSearch] = useState("");
    onchange()
    submit()

  return (
    <>
        
        <Hero />
        <Nav />
        <Searchbar searchTerm = {search}/>
        <CardContainer> 
            <Card />
        </CardContainer>

    </>    
        
    
  );
}

export default Search;
