import React, {useState} from 'react';
import {ModalVideo} from '@baskvava/react-video-modal';

function Basic() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>Basic Video Modal</h2>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          cursor: 'pointer',
          padding: '0.8rem',
          fontSize: '18px',
          marginBottom: '0.8rem',
        }}>
        Click Me to Open Video Modal
      </button>
      <ModalVideo
        title="video"
        header="Fixed width Video"
        width={800}
        isOpen={isOpen}
        onClosed={() => setIsOpen(false)}
        url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  );
}

export default Basic;
