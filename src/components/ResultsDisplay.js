// src/components/ResultsDisplay.js
import React from 'react';

const ResultsDisplay = ({ results }) => {
  return (
    <div>
      <h2>Optimization Results</h2>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
};

export default ResultsDisplay;
