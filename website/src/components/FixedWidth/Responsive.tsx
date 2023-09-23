import React from 'react';
import {ModalVideo, useToggle} from '@baskvava/react-video-modal';

function Responsive() {
  const {isOpen, toggle, close} = useToggle();

  return (
    <div>
      <h2>Fixed Width with Responsive Example</h2>

      <button onClick={toggle} className="v-btn">
        Click Me to Open Video Modal
      </button>

      <ModalVideo
        title="video"
        width={800}
        // highlight-next-line
        responsive
        isOpen={isOpen}
        onClosed={close}
        url="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      />
    </div>
  );
}

export default Responsive;
