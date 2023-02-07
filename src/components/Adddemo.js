import React, { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalHeader } from "react-bootstrap";
function Adddemo({ open, setOpen }) {
  let [formData, setFormData] = useState({
    name: "",
    price: "",
    desc: "",
  });

  const AddOnClick = (e) => {
    const newInput = (data) => ({
      ...data,
      [e.target.name]: e.target.value,
    });
    setFormData(newInput);
  };

  let closeModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal show={open}>
        <ModalHeader>Add Product</ModalHeader>
        <ModalBody>
          <Form>
            <div className="mb-2">
              <label>Name</label>
              <input
                name="name"
                type="text"
                placeholder="insert Product name"
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
              ></input>
            </div>
            <div className="mb-2">
              <label>Price</label>
              <input
                name="price"
                label="price"
                type="number"
                placeholder="insert Product price"
                onChange={(e) => {
                  setFormData({ ...formData, price: e.target.value });
                }}
              ></input>
            </div>
            <div className="mb-2">
              <label>Discription</label>
              <textarea
                name="disc"
                label="Description"
                type="text"
                placeholder="insert description of your product"
                onChange={(e) => {
                  setFormData({ ...formData, desc: e.target.value });
                }}
              ></textarea>
            </div>

            <div>
              <Button
                className="mx-3"
                onClick={() => {
                  AddOnClick();
                }}
              >
                Submit
              </Button>
              <Button onClick={closeModal}>Close</Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Adddemo;
