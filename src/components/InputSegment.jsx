import { useState } from 'react';
import Editor from "@monaco-editor/react"; // Monaco Editor
import './InputSegment.css';
import axios from 'axios'; // For API requests

const InputSegment = ({ onRun }) => {
  const [code, setCode] = useState(''); // Code state
  const [input, setInput] = useState(''); // Input state
  const [output, setOutput] = useState(''); // Output state
  const [error, setError] = useState(''); // Error state

  const handleSubmit = async () => {
    setError('');
    setOutput('');

    // Validate code and input
    if (!code.trim()) {
      setError('Code cannot be empty.');
      return;
    }
    if (!input.trim()) {
      setError('Input cannot be empty.');
      return;
    }

    try {
      const response = await axios.post('/api/run', {
        language: 'python',
        code,
        input,
      });
      setOutput(response.data.output);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred while running the code.');
    }
  };

  return (
    <div className="input-segment">
      <div className="editor-container">
        <h2>Code</h2>
        <Editor
          height="300px"
          defaultLanguage="python"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value)}
          options={{
            fontSize: 14,
            automaticLayout: true,
          }}
        />
      </div>

      <div className="input-container">
      <button onClick={handleSubmit}>Run</button>
        <h2>Input</h2>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter input for your code here"
          rows="8"
        ></textarea>
        
      </div>

      {error && <div className="error">{error}</div>}
      {output && (
        <div className="output-container">
          <h2>Output</h2>
          <pre>{output}</pre>
        </div>
      )}
    </div>
  );
};

export default InputSegment;
