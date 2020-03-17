import React , { Component }from "react";
import allEmployees from "../../db/db.json";
import Table from "../Table";

class Search extends Component {
    state = {
        allEmployees, 
        search: ""
    }

    handleSearch = (event) => {
        
    }


    render(){
        return <Table search={this.state.search}  allEmployees={this.state.allEmployees} handleSearch={this.handleSearch} />
    }
    

}

export default Search;