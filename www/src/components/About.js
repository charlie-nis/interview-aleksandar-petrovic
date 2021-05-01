import { Link } from 'react-router-dom';
const About = ({ appVersion }) => {
  return (
    <div>
      <h4>Version {appVersion}</h4>
      <Link to='/'>Go back</Link>
    </div>
  );
};

export default About;
