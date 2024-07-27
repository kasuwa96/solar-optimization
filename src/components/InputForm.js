// src/components/InputForm.js
import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [panelSpecs, setPanelSpecs] = useState('');
  const [roofData, setRoofData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ panelSpecs, roofData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Panel Specifications:
        <input
          type="text"
          value={panelSpecs}
          onChange={(e) => setPanelSpecs(e.target.value)}
        />
      </label>
      <label>
        Roof Data:
        <input
          type="text"
          value={roofData}
          onChange={(e) => setRoofData(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
