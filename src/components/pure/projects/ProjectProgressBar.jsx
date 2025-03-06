import ProgressBar from 'react-bootstrap/ProgressBar';

function ProjectProgressBar () {
  return (
    <ProgressBar style={{width:"500px"}}>
      <ProgressBar  variant="success" now={60} key={1} />
      {/* <ProgressBar variant="warning" now={20} key={2} />
      <ProgressBar  variant="danger" now={10} key={3} /> */}
    </ProgressBar>
  );
}

export default ProjectProgressBar;