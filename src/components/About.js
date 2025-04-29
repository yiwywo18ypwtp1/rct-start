import {React} from 'react';
import Header from './Header'


function About(props) {
    return (
      <>
        <Header user={props.user}/>
        <h2>О нас</h2>
      </>
    );
  }

export default About