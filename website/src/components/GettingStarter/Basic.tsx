import React from 'react';
import {ModalVideo, useToggle} from '@baskvava/react-video-modal';

function Basic() {
  const {isOpen, toggle, close} = useToggle();

  return (
    <div>
      <h2>Video Modal with Header</h2>

      <button onClick={toggle} className="v-btn">
        Click Me to Open Video Modal
      </button>

      <ModalVideo
        title="video"
        /* highlight-start */
        header="This is my first video"
        /* highlight-end */
        width={800}
        isOpen={isOpen}
        onClosed={close}
        url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  );
}

export default Basic;
