// import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "reactstrap";
// import ModalForm from "./ModalForm";
// import DataTable from "./DataTable";
// // import { CSVLink } from "react-csv";

// function Dtable(props) {
//   const [items, setItems] = useState([
//     {
//       id: 0,
//       first: "Jane",
//       last: "Smith",
//       email: "js@gmail.com",
//       phone: "535-555-4555",
//       location: "New York, New York",
//       hobby: "Programming",
//     },
//   ]);

//   const getItems = () => {
//     fetch("http://localhost:3000/crud")
//       .then((response) => response.json())
//       .then((items) => setItems(items))
//       .catch((err) => console.log(err));
//   };

//   const addItemToState = (item) => {
//     setItems([...items, item]);
//   };

//   const updateState = (item) => {
//     const itemIndex = items.findIndex((data) => data.id === item.id);
//     const newArray = [
//       ...items.slice(0, itemIndex),
//       item,
//       ...items.slice(itemIndex + 1),
//     ];
//     setItems(newArray);
//   };

//   const deleteItemFromState = (id) => {
//     const updatedItems = items.filter((item) => item.id !== id);
//     setItems(updatedItems);
//   };

//   useEffect(() => {
//     getItems();
//   }, []);

//   return (
//     <Container className="App">
//       <Row>
//         <Col>
//           <h1 style={{ margin: "20px 0" }}>CRUD Database</h1>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <DataTable
//             items={items}
//             updateState={updateState}
//             deleteItemFromState={deleteItemFromState}
//           />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <CSVLink
//             filename={"db.csv"}
//             color="primary"
//             style={{ float: "left", marginRight: "10px" }}
//             className="btn btn-primary"
//             data={items}
//           >
//             Download CSV
//           </CSVLink>
//           <ModalForm buttonLabel="Add Item" addItemToState={addItemToState} />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Dtable;

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Modal, Input } from "react-bootstrap";

function Dtable() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div class="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">
          <div class="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search Student"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div
            class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Student Details</b>
            </h2>
          </div>
          <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Add New Student
            </Button>
          </div>
        </div>
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name </th>
                  <th>Address</th>
                  <th>City </th>
                  <th>Country </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Rual Octo</td>
                  <td>Deban Steet</td>
                  <td>Newyork</td>
                  <td>USA</td>
                  <td>
                    <a
                      href="#"
                      class="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      class="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i class="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Demark</td>
                  <td>City Road.13</td>
                  <td>Dubai</td>
                  <td>UAE</td>
                  <td>
                    <a
                      href="#"
                      class="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      class="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i class="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Richa Deba</td>
                  <td>Ocol Str. 57</td>
                  <td>Berlin</td>
                  <td>Germany</td>
                  <td>
                    <a
                      href="#"
                      class="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      class="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i class="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>James Cott</td>
                  <td>Berut Road</td>
                  <td>Paris</td>
                  <td>France</td>
                  <td>
                    <a
                      href="#"
                      class="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      class="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i class="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>Dheraj</td>
                  <td>Bulf Str. 57</td>
                  <td>Delhi</td>
                  <td>India</td>
                  <td>
                    <a
                      href="#"
                      class="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      class="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i class="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>6</td>
                  <td>Maria James</td>
                  <td>Obere Str. 57</td>
                  <td>Tokyo</td>
                  <td>Japan</td>
                  <td>
                    <a
                      href="#"
                      class="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      class="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i class="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
        <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Country"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter City"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Country"
                  />
                </div>

                <button type="submit" class="btn btn-success mt-4">
                  Add Record
                </button>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Model Box Finsihs */}
        </div>
      </div>
    </div>
  );
}

export default Dtable;
