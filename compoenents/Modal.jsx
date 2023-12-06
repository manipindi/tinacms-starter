import { Prose } from "@nikolovlazar/chakra-ui-prose";
import React, { useEffect, useRef, useState } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import styled from "styled-components";
import ProseComponent from "../tina-components/ProseRenderer";
import { savePDF } from '@progress/kendo-react-pdf';


const ButtonEx = styled.button`
  border: 2px solid orange;
`;
const DownloadButton = styled.button`
  background-color: #3333ec;
  color: white;
  position: absolute;
  top: -46px;
  left: 0px;
  padding: 8px;
  border-radius: 4px;
`
export const Modal = ({ isOpen = true, onClose, children, bodyData, ...rest }) => {
  const title = rest.form.getFieldState("title")?.value;
  console.log(title, "title");
  const ref = useRef(null);
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: isOpen ? "block" : "none",
    zIndex: "1000",
  };
  let data = (
    <Prose>
      <>{bodyData && <TinaMarkdown content={bodyData} />}</>
    </Prose>
  );



  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    // padding: "20px",
    borderRadius: "8px",
    width: "40%",
    height: "80%",
    display: isOpen ? "block" : "none",
    zIndex: "10001",
    // whiteSpace: "initial",
    // position : "relative"
  };

  const buttonStyle = {
    position: "absolute",
    top: "-40px",
    right: "10px",
    padding: "4px 8px",
    // border : "2px solid white",
    color: "white",
    borderRadius: "4px",
  };

  const exportPDFWithMethod = () => {
    let element = document.getElementById("download_content") || document.body;
    savePDF(element, {
      paperSize: "A4",
      fileName: title || 'default'
    });
  };
  return (
    <div>
      <div style={overlayStyle} ref={ref} onClick={onClose}></div>
      <div style={modalStyle}>
        <ButtonEx style={buttonStyle} onClick={onClose}>
          Close X
        </ButtonEx>
        {data && <ProseComponent data={data} />}
        <DownloadButton onClick={exportPDFWithMethod}>
            Download
        </DownloadButton>
      </div>
    </div>
  );
};
