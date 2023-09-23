import React from "react";
import ReactDOM from "react-dom/client";
import { useToggle, ModalVideo } from "../../src";

function App() {
  const { isOpen, toggle, close } = useToggle();
  const {
    isOpen: isResponsiveOpen,
    toggle: responsiveToggle,
    close: responsiveClose,
  } = useToggle();

  return (
    <div className="App" style={{ height: "1800px" }}>
      <div>
        <span>Fixed Width Video</span>
        <button onClick={toggle}>Modal</button>
        <ModalVideo
          title="video"
          header="Fixed width Video"
          width={800}
          isOpen={isOpen}
          onClosed={close}
          autoPlay={false}
          url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
      </div>
      <div>
        <span>Responsive Width Video</span>
        <button onClick={responsiveToggle}>Modal</button>
        <ModalVideo
          title="video"
          widthRatio={0.8}
          isOpen={isResponsiveOpen}
          onClosed={responsiveClose}
          url="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
