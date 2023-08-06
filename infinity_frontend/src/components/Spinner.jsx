import React from 'react';
import { Circles } from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Circles color='#00BFFF' height={50} width={200} className='m-5' />
      <p className='text-lg text-center px-2'>{message}</p>
    </div>
  );
};

export default Spinner;
