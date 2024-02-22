import React, { useEffect, useRef, useState } from "react";
import Papa from "papaparse";
import { wrapFieldsWithMeta } from "tinacms";

export const CsvReader = wrapFieldsWithMeta(({input, form, field}) => {
  const [csvData, setCsvData] = useState([]);
  const inputRef = useRef(null)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          setCsvData(result.data);
        },
        header: true, // Set to true if CSV file has header row
      });
    }
  };
  useEffect(() => {
    if (csvData?.length) {
      const jsonValue = JSON.stringify(csvData)
      input.onChange(jsonValue)
    }
  }, [csvData]);
  console.log(csvData, "csvData");
  return (
    <div>
      <input type="file" ref={inputRef} onChange={handleFileChange} />
    </div>
  );
});
