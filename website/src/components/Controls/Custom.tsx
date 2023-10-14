import React from 'react';
import {ModalVideo, useToggle} from '@baskvava/react-video-modal';

function Custom() {
  const {isOpen, toggle, close} = useToggle();

  return (
    <div>
      <h2>Custom Control Example</h2>
      <button onClick={toggle} className="v-btn">
        Click Me to Open Video Modal
      </button>

      <ModalVideo
        title="video"
        header="Fixed Width Video Modal"
        width={800}
        isOpen={isOpen}
        onClosed={close}
        url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  );
}

export default Custom;
