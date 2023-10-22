import React from 'react';
import Sidebar from './Sidebar';
import './Index.css';

function Index() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className='cuerpo'>
        <div></div>
          <div className='titulo'>
            <h1 className='h1'>HOLI</h1>    
          </div>
        <p>teni pololi?</p>
      </div>
    </div>
  );
}

export default Index;

