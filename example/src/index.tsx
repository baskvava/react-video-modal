import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ModalVideo } from "../../src";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResponsiveOpen, setIsResponsiveOpen] = useState(false);

  return (
    <div className="App" style={{ height: "1800px" }}>
      <div>
        <span>Fixed Width Video</span>
        <button onClick={() => setIsOpen(true)}>Modal</button>
        <ModalVideo
          title="video"
          header="Fixed width Video"
          width={800}
          isOpen={isOpen}
          onClosed={() => setIsOpen(false)}
          url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
      </div>
      <div>
        <span>Responsive Width Video</span>
        <button onClick={() => setIsResponsiveOpen(true)}>Modal</button>
        <ModalVideo
          title="video"
          header="Responsive Width Video"
          widthRatio={0.8}
          isOpen={isResponsiveOpen}
          onClosed={() => setIsResponsiveOpen(false)}
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
