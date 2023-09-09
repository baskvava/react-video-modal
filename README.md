# React-Video-Modal [![NPM Version](https://img.shields.io/badge/npm-v_0.0.17_alpha-blue)](https://www.npmjs.com/package/@baskvava/react-video-modal) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)

This is a react library for video embbeded in modal

[Demo](https://react-video-modal.vercel.app/)

## Installation

```bash
npm install @baskvava/react-video-modal
```

## Example

```js
import React, { useState } from "react";
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
```
