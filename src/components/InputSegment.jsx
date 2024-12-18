import { useState } from 'react';
import './InputSegment.css';

const InputSegment = ({ onRun }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    onRun(input);
  };

  return (
    <div className="input-segment">
      <h2>Input</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your input here"
        rows="8"
      ></textarea>
      <button onClick={handleSubmit}>Run</button>
    </div>
  );
};

export default InputSegment;
