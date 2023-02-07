import { TableHead } from "@mui/material";
// import axios from "axios";
import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

import Adddemo from "./Adddemo";

// import EditProduct from "./EditProduct";

function Demo() {
  const [demo, setDemo] = useState([]);
  const [open, setOpen] = useState(false);

  //addProduct modal open
  let modalOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Table className="table table-striped">
        <TableHead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>
              <Button onClick={modalOpen}>Add Product</Button>
            </th>
          </tr>
        </TableHead>
        <tbody>
          {demo.map((element) => {
            return (
              <tr id="{element.id}">
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.desc}</td>
                <td>{element.price}</td>

                <td>
                  <Button>Edit</Button>
                  <Button className="btn btn-danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {open && (
        <Adddemo open={open} setOpen={setOpen} demo={demo} setDemo={setDemo} />
      )}
    </div>
  );
}

export default Demo;
