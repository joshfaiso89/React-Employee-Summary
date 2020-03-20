import React , { Component }from "react";
import Table from "../Table";
// import allEmployees from "../../db/db.json";
import Api from "../../db/Api";

// console.log(Api);

class Search extends Component {
    state = {
        allEmployees: [],
        search: ""
    }
    componentDidMount() {
        Api.getRandomUser().then((res) => {
            this.setState({ allEmployees: res.data.results });
             console.log(res.data.results);
        })
    }

    handleSearch = (event) => {
        console.log(event);
    };


    render(){
        return <Table search={this.state.search}  allEmployees={this.state.allEmployees} handleSearch={this.handleSearch} />
    }
    

}

export default Search;