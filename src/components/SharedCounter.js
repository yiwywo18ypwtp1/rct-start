import {React} from 'react';


function SharedCounter({count, onClick}) {
  return (
    <button className='btn' onClick={onClick}>{count}</button>
  );
}

export default SharedCounter 