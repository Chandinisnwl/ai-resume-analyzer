import { useParams } from 'react-router';

const Resume = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: 40 }}>
      <h1>Resume Analysis</h1>
      <p>Resume ID: {id}</p>
    </div>
  );
};

export default Resume;
