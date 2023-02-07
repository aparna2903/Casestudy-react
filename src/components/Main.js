import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ModalForm from "./Modal";
import DataTable from "./DataTable";

function Main(props) {
  const [items, setItems] = useState([
    // {
    //   id: "",
    //   first: "Aparna",
    //   last: "Gavali",
    //   email: "aparna@gmail.com",
    //   phone: "1234567890",
    //   location: "Bengluru",
    //   hobby: "Programming",
    // },
  ]);

  const getItems = () => {
    fetch("http://localhost:3000/crud")
      .then((response) => response.json())
      .then((items) => setItems(items))
      .catch((err) => console.log(err));
  };

  const addItemToState = (item) => {
    setItems([...items, item]);
  };

  const updateState = (item) => {
    const itemIndex = items.findIndex((data) => data.id === item.id);
    const newArray = [
      ...items.slice(0, itemIndex),
      item,
      ...items.slice(itemIndex + 1),
    ];
    setItems(newArray);
  };

  const deleteItemFromState = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container className="App">
      <Row>
        <Col>
          <h1 style={{ margin: "20px 0" }}>Personal Information</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable
            items={items}
            updateState={updateState}
            deleteItemFromState={deleteItemFromState}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ModalForm buttonLabel="Add Item" addItemToState={addItemToState} />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
