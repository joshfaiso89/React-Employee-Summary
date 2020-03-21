import React from "react";
import InputField from "../../components/Inputfeild";
import "./style.css";

function Table(props) {
    return (

        <div className="container">
            <div class="alert alert-dark" role="alert" style={{color: "white", backgroundColor: "#212529", textAlign: "center", fontSize: "20px"}}>
                Search Employees by First or Last Name
            </div>
            <div className="text-center">
                <InputField handleInputChange={props.handleInputChange} searchValue={props.search} />
            </div>
            <br></br>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col" onClick={() => { props.handleFormSubmit("first") }}  >First Name</th>
                        <th scope="col" onClick={() => { props.handleFormSubmit("last") }}   >Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.allEmployees.map(employee => {
                            return (
                                <tr>
                                    <td><img src={employee.picture.medium} /></td>
                                    <td>{employee.name.first}</td>
                                    <td>{employee.name.last}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.phone}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Table;
