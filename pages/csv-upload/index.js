import React, { useState } from 'react';
import Papa from 'papaparse';

function CsvReader() {
  const [csvData, setCsvData] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          setCsvData(result.data);
        },
        header: true // Set to true if CSV file has header row
      });
    }
  };
  console.log(csvData, "csvData");
  return (
    <div>
      <h2>CSV File Reader</h2>
      <input type="file" onChange={handleFileChange} />
      <div>
        <h3>CSV Data</h3>
        <table>
          <thead>
            <tr>
              {csvData.length > 0 && Object.keys(csvData[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CsvReader;
