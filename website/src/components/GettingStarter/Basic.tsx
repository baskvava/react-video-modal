import React from 'react';
import {ModalVideo, useToggle} from '@baskvava/react-video-modal';

function Basic() {
  const {isOpen, toggle, close} = useToggle();

  return (
    <div>
      <h2>Basic Video Modal</h2>
      <button
        onClick={toggle}
        style={{
          cursor: 'pointer',
          padding: '0.8rem',
          fontSize: '18px',
          marginBottom: '0.8rem',
        }}>
        Click Me to Open Video Modal
      </button>
      {/* highlight-start */}
      <ModalVideo
        title="video"
        header="Fixed width Video"
        width={800}
        isOpen={isOpen}
        onClosed={close}
        url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
      {/* highlight-end */}
    </div>
  );
}

export default Basic;
