import React from 'react';
import {ModalVideo, useToggle} from '@baskvava/react-video-modal';

function BasicNoHeader() {
  const {isOpen, toggle, close} = useToggle();

  return (
    <div>
      <h2>Basic Video Modal</h2>
      <button onClick={toggle} className="v-btn">
        Click Me to Open Video Modal
      </button>

      {/* highlight-start */}
      <ModalVideo
        title="video"
        width={800}
        isOpen={isOpen}
        onClosed={close}
        url="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      />
      {/* highlight-end */}
    </div>
  );
}

export default BasicNoHeader;
