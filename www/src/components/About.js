import { Link } from 'react-router-dom';
const About = ({ appVersion }) => {
  return (
    <div className='center-align'>
      <h4>ToDoList Web App</h4>
      <h5>Version {appVersion}</h5>
      <div>Made by Aleksandar Petrović using React / Express / MongoDB</div>
      <br />
      <Link to='/'>Go back</Link>
    </div>
  );
};

export default About;
