import React, { useState } from 'react';
import Sidebar from './components/navigation/sidebar/Sidebar';
import Keyshortcuts from './components/modals/Keyshortcuts';
import Display from './Display';

//Contexts
import ModalContext from './contexts/modal/ModalContext';
import ActivePillContext from './contexts/sidebar/ActivePillContext';
//CSS
import './styles/style.scss';
// {
//   "filesUploaded": [
//       {
//           "filename": "test.txt",
//           "handle": "xa2IsGkdSqeMtFYsNxYp",
//           "mimetype": "text/plain",
//           "originalPath": "test.txt",
//           "size": 9,
//           "source": "local_file_system",
//           "url": "https://cdn.filestackcontent.com/xa2IsGkdSqeMtFYsNxYp",
//           "uploadId": "K1osTGw40p3d1fEx",
//           "originalFile": {
//               "name": "test.txt",
//               "type": "text/plain",
//               "size": 9
//           },
//           "status": "Stored"
//       }
//   ],
//   "filesFailed": []
// }

//Filestack
import * as filestack from 'filestack-js';
const client = filestack.init('AOPKNZchaTi6YD4iYGAcPz');
const options = {
  fromSources: ["local_file_system"],
  maxFiles: 1,
  onUploadDone: (res) => {
    const uploadedFile = res.filesUploaded.pop();
    const newMovie = {
      id: uploadedFile.handle,
      name: uploadedFile.filename,
      url: uploadedFile.url,
      size: uploadedFile.size
    }
    localStorage.setItem('NEW_MOVIE', JSON.stringify(newMovie));
  },

}
const picker = client.picker(options);

const App = () => {

  return (
    <>
      <ModalContext>
        <Keyshortcuts />
        <ActivePillContext>
          <Sidebar />
          <Display picker={picker} />
        </ActivePillContext>
      </ModalContext>
    </>
  )
}
export default App
