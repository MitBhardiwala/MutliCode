import './App.css';
import Navbar from './components/Navbar';
import InputSegment from './components/InputSegment';
import OutputSegment from './components/OutputSegment';
import { useState } from 'react';

function App() {
  const [output, setOutput] = useState('');

  const handleRun = async (input) => {
    try {
      const response = await fetch('/api/your-endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });
      const data = await response.json();
      setOutput(data.result); // Adjust based on your API response structure
    } catch (error) {
      setOutput('Error occurred while fetching output');
    }
  };

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <InputSegment onRun={handleRun} />
        <OutputSegment output={output} />
        
      </div>
    </div>
  );
}

export default App;
