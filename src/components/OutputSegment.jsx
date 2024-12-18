import './OutputSegment.css';

const OutputSegment = ({ output }) => {
  return (
    <div className="output-segment">
      <h2>Output</h2>
      <div className="output-box">{output || 'No output yet'}</div>
    </div>
  );
};

export default OutputSegment;
