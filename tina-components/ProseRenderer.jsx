import { PDFExport } from "@progress/kendo-react-pdf";
import React from "react";
import styled from "styled-components";

// Styled component using the custom prose function
const StyledContainer = styled.div`
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  white-space: initial;
  overflow-y: scroll;
  height: 100%;
  padding: 20px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    font-size: 20px;
  }

  p {
    margin-bottom: 20px;
    padding-left: 10px;
    word-wrap: break-word;
  }

  ul{
  list-style: circle ;
  padding-inline-start: 40px;
 }
 ol{
  list-style: decimal;
  padding-inline-start: 40px;
 }
`;

const ProseComponent = ({ data }) => {
  return <StyledContainer id="download_content">{data}hellomani</StyledContainer>
};

export default ProseComponent;