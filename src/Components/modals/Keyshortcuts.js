import React from 'react';

import { ShortcutsImage } from '../../assets/img/images';

const Keyshortcuts = () => {
  return (
    <>
      <div className='modal__keyshortcuts'>
        <img src={ShortcutsImage} alt="Skróty klawiszowe" />
      </div>
    </>
  );
};

export default Keyshortcuts;
