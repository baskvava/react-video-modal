import React, { useState } from "react";
import "./App.css";
import { ModalVideo } from "@baskvava/react-video-modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <ModalVideo
        title="my-first-video"
        isOpen={isOpen}
        onClosed={() => setIsOpen(false)}
        url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  );
}
export default App;

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import ModalVideo from 'react-modal-video';

// const App = () => {
//   const [isOpen, setOpen] = useState(false);

//   return (
//     <React.Fragment>
//       <ModalVideo
// 				channel="youtube"
// 				youtube={{ mute: 0, autoplay: 0 }}
// 				isOpen={isOpen}
// 				videoId="L61p2uyiMSo"
// 				onClose={() => setOpen(false)}
// 			/>
//       <button className="btn-primary" onClick={() => setOpen(true)}>
//         VIEW DEMO
//       </button>
//     </React.Fragment>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));
