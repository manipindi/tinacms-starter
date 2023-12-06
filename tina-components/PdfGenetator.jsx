import React, { useState } from "react";
import { wrapFieldsWithMeta } from "tinacms";
import { Modal } from "../compoenents/Modal";
import styled from "styled-components";

const GenerateButton = styled.button`
  background-color: #6565f7;
  color: white;
  padding: 8px;
  border-radius: 4px;
`

export const PdfGenerator = wrapFieldsWithMeta((props) => {
  const bodyData = props.form.getFieldState("body")?.value;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <GenerateButton className={"buttonExample"} onClick={openModal}>
        Generate
      </GenerateButton>

      <Modal
        {...props}
        onClose={closeModal}
        bodyData={bodyData}
        isOpen={isModalOpen}
      />
    </div>
  );
});
