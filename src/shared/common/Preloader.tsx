import React from 'react';
// @ts-ignore
import preloader from '../../img/Preloader.gif'

const Preloader = () => {
  return <div>
    <img src={preloader} alt='loading...' />
  </div>
};

export default Preloader;
