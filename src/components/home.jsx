import React from 'react';
import Title from './title';
import Main from './main';

const Home = ({deleteProgram}) => {
    return ( 
        <>
          <Title/>
          <Main deleteProgram = {deleteProgram}/>
        </>
     );
}
 
export default Home;