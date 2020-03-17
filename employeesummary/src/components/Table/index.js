import React from "react";

function Table(props) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>

                {
                    props.allEmployees.map(employee => {
                        return (
                            <tr>
                                <td><img src={employee.picture} /></td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    )
}

export default Table;
