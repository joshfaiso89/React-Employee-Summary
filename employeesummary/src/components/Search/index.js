import React, { Component } from "react";
import Table from "../Table";
// import allEmployees from "../../db/db.json";
import Api from "../../db/Api";

// console.log(Api);

class Search extends Component {
    state = {
        allEmployees: [],
        search: "",
        originalAllEmployees: []
    }
    componentDidMount() {
        Api.getRandomUser().then((res) => {
            this.setState({ allEmployees: res.data.results, originalAllEmployees: res.data.results });
            //  console.log(res.data.results);
            const newEmployee = this.state.allEmployees.sort((a, b) => {
                console.log(a.name.first, b.name.last, "first/last")
                return a.name.first.toLowerCase() - b.name.first.toLowerCase();
            })

            let columnName = "first"
            let newArray = this.state.allEmployees.sort((a, b) => a.name[columnName].localeCompare(b.name[columnName]));
            this.setState({ allEmployees: newArray });

        })
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value // name: value
        })

        console.log(value);

        let newAllEmployees = this.state.allEmployees.filter(person => {
            return person.name.first.toLowerCase().indexOf(value.toLowerCase()) > -1 || person.name.last.toLowerCase().indexOf(value.toLowerCase()) > -1 || person.email.toLowerCase().indexOf(value.toLowerCase()) > -1 || person.phone.indexOf(value) > -1;
        })

        if (value.length === 0) {
            this.setState({
                allEmployees: this.state.originalAllEmployees
            })
        } else {
            this.setState({
                allEmployees: newAllEmployees
            })
        }




    };

    handleFormSubmit = (columnName) => {
        let newArray = this.state.allEmployees.sort((a, b) => a.name[columnName].localeCompare(b.name[columnName]));
        this.setState({ allEmployees: newArray });
    }
    render() {
        return <Table handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} search={this.state.search} allEmployees={this.state.allEmployees} handleSearch={this.handleSearch} />
    }


}

export default Search;