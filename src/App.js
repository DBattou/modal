import React, { useState } from "react";
import "./App.css";

import Modal from "react-modal";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  console.log(modalIsOpen);

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
    <div className="App">
      <button className="OpenModalButton" onClick={() => setModalIsOpen(true)}>
        Ouvrir modal
      </button>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
          shouldCloseOnOverlayClick={false}
        >
          {/* <h2 ref={subtitle => (subtitle = subtitle)}>Hello</h2> */}
          <button onClick={() => setModalIsOpen(false)}>close</button>
          <div>I am a modal</div>
        </Modal>
      )}
    </div>
  );
}

export default App;
