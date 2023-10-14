# React-Video-Modal [![NPM Version](https://img.shields.io/badge/npm-v_0.1.0_alpha-blue)](https://www.npmjs.com/package/@baskvava/react-video-modal) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)

> This is a react library for a video inside of a modal

**[Documents and Demo](https://baskvava.github.io/react-video-modal/)**

## Installation

```bash
npm install @baskvava/react-video-modal
```

or

```bash
yarn add @baskvava/react-video-modal
```

<img src="https://baskvava.github.io/portfolio/react-video-modal.png" title="demo" />

## Example

```js
import React, { useState } from "react";
import { ModalVideo, useToggle } from "@baskvava/react-video-modal";

function App() {
  const { isOpen, toggle, close } = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}>Open Video Modal</button>
      <ModalVideo
        title="video"
        header="Fixed width Video"
        width={800}
        isOpen={isOpen}
        onClosed={close}
        url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  );
}
export default App;
```

## Local ENV

install the node package

```bash
yarn install
```

run example

```bash
yarn dev
```
