import React from 'react';
import Dataflow from '../../../../assets/Dataflow.png';

function Navbar() {
  return (
    <div className='bg-[#070F2B] flex h-[10vh] items-center justify-between text-white'>
      <div className='flex justify-center items-center p-2 gap-3'>
        <img src={Dataflow} alt="image" />
        <h2>Help</h2>
      </div>
      <div>
        <h1>Data Flow</h1>
      </div>
      <div className='flex p-5 gap-5'>
        <h3>Login</h3>
        <h2>Sign Up</h2>
      </div>
    </div>
  )
}

export default Navbar
