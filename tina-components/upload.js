import { useRef } from 'react';         

export const UploadPDF = ({handleFile}) => { // REVISED
  const hiddenFileInput = useRef(null); 

  const handleClick = event => {
    hiddenFileInput.current.click();   
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    // handleFile(fileUploaded);                   // ADDED
  };

  return (
    <>
      <button 
        className="button-upload"
        onClick={handleClick}
      >
        Upload a file
      </button>
      <input 
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{display:'none'}}
      />
    </>
  );
};