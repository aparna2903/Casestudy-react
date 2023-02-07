import React from "react";
import { Table, Button } from "reactstrap";
import ModalForm from "./Modal";

function DataTable(props) {
  const deleteItem = (index) => {
    let confirmDelete = window.confirm("Delete item forever?");
    if (confirmDelete) {
      db.splice(index, 1);
      localStorage.setItem("database", JSON.stringify(db));
    }

    //   fetch("http://localhost:3000/crud${id}", {
    //     method: "delete",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       id,
    //     }),
    //   })
    //     .then((response) => response.json())
    //     .then((item) => {
    //       props.deleteItemFromState(id);
    //     })
    //     .catch((err) => console.log(err));
  };

  let database = localStorage.getItem("database");
  let db = database ? JSON.parse(database) : [];

  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First</th>
          <th>Last</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Hobby</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {db.map((item, index) => {
          return (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.first}</td>
              <td>{item.last}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.location}</td>
              <td>{item.hobby}</td>
              <td>
                <div style={{ width: "150px" }}>
                  <ModalForm
                    buttonLabel="Edit"
                    item={item}
                    updateState={props.updateState}
                  />{" "}
                  <Button color="danger" onClick={() => deleteItem(index)}>
                    Del
                  </Button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default DataTable;
