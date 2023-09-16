import React from 'react';
import {ModalVideo, useToggle} from '@baskvava/react-video-modal';

function UseToogle() {
  // highlight-start
  const {isOpen, toggle, close} = useToggle();
  // highlight-end

  return (
    <div>
      <h2>UseToogle Example</h2>
      <button
        // highlight-next-line
        onClick={toggle}
        className="v-btn">
        Click Me to Open Video Modal
      </button>
      <ModalVideo
        title="video"
        header="useToggle"
        width={800}
        // highlight-next-line
        isOpen={isOpen}
        // highlight-next-line
        onClosed={close}
        url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  );
}

export default UseToogle;
