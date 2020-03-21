import React , { Component }from "react";
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
             console.log(res.data.results);
        })
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value // name: value
        })

        console.log(value);

      let newAllEmployees = this.state.allEmployees.filter(person => {
        //   if(person.name.first.indexOf(value) > -1) {
        //       return true; 
        //   }
        //   else{
        //       return false;
        //   }
          return person.name.first.indexOf(value) > -1;
      })

      if(value.length === 0) {
          this.setState({
              allEmployees: this.state.originalAllEmployees
          })
      } else {
        this.setState({
            allEmployees: newAllEmployees
        })
      }
   
       

    };


    render(){
        return <Table  handleInputChange={this.handleInputChange}   search={this.state.search}  allEmployees={this.state.allEmployees} handleSearch={this.handleSearch} />
    }
    

}

export default Search;