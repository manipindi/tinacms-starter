import React, { useRef, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import { uploadData } from 'aws-amplify/storage';



export default function Experimental() {
  const inputFile = useRef(null);

//   Amplify.configure(amplifyconfig);

  const [pdf, setPdf] = useState(null);

  const handlePdf = (event) => {
    const fileUploaded = event.target.files[0];
    setPdf(fileUploaded);
  };

  const hadnelPdfUpload = async () => {
    if (pdf) {
      let filename = pdf.name;
      console.log(filename, pdf);
      try {
        const result = await uploadData({
          key: filename,
          data: pdf,
          options: {
            accessLevel: 'guest'
          }
        }).result;
        console.log(result);
        // if (result.key) {
        //   let fileUrl = `https://${awsConfig.aws_user_files_s3_bucket}.s3.${awsConfig.aws_user_files_s3_bucket_region}.amazonaws.com/public/current-affairs/${filename}`;
        //   if (inputFile.current) {
        //     inputFile.current.value = "";
        //   }
        //   console.log(result);
        // }
      } catch (e) {}
    }
  };
  return (
    <>
      <input
        type="file"
        name="pdf"
        onChange={handlePdf}
        accept="application/pdf,.pdf"
        ref={inputFile}
      />
      <Button onClick={hadnelPdfUpload}>Upload</Button>
    </>
  );
}
