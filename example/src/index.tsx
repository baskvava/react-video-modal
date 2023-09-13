import React from "react";
import ReactDOM from "react-dom/client";
import { ModalVideo, useToggle } from "../../src";

function App() {
  const { isOpen, toggle } = useToggle();
  const { isOpen: isResponsiveOpen, toggle: isResponsiveToggle } = useToggle();

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
          onClosed={toggle}
          url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
      </div>
      <div>
        <span>Responsive Width Video</span>
        <button onClick={isResponsiveToggle}>Modal</button>
        <ModalVideo
          title="video"
          header="Responsive Width Video"
          widthRatio={0.8}
          isOpen={isResponsiveOpen}
          onClosed={isResponsiveToggle}
          url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
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
