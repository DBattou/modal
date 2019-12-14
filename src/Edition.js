import React, { useState } from "react";
import Modal from "react-modal";

import "./Edition.css";
import Slider from "./Slider";

const Search = () => {
  const [items, setItems] = useState([
    { id: 1, title: "carte 1", format: undefined },
    { id: 2, title: "carte 2", format: undefined },
    { id: 3, title: "carte 3", format: undefined },
    { id: 4, title: "carte 4", format: undefined }
  ]);

  const [cardId, setCardId] = useState(undefined);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = id => {
    setCardId(id);
    setModalIsOpen(true);
  };

  const closeModal = format => {
    if (format) {
      const index = items.findIndex(item => item.id === cardId);
      items[index] = { ...items[index], format };
      setItems([...items]);
    }

    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };

  Modal.setAppElement("#root");

  return (
    <div className="Edition">
      <h1 className="EditionText">EDITION</h1>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Select Image format Modal"
      >
        <h2>Selection du format pour la carte : {cardId}</h2>
        <button onClick={() => closeModal()}>cancel</button>
        <button onClick={() => closeModal("16:9")}>16:9</button>
        <button onClick={() => closeModal("3:4")}>3:4</button>
      </Modal>
      <Slider selectFormat={openModal} items={items}></Slider>
    </div>
  );
};

export default Search;
