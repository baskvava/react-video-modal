import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useWindowDimensions } from "./useWindowDimensions";

import "./ModalVideo.css";

type Props = {
  isOpen: boolean;
  onClosed: () => void;
  url: string;
  title: string;
  header?: string | JSX.Element;
  width?: number;
  widthRatio?: number;
};

function ModalVideo({
  isOpen = false,
  onClosed,
  url,
  title,
  header = "This is my first video",
  width,
  widthRatio = 0.8,
}: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const windowSize = useWindowDimensions();
  const videoWidth = width ?? windowSize.width * widthRatio;

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        onClosed();
      }
    };
    const closeModal = (e: MouseEvent) => {
      if (modalRef.current?.contains(e.target as HTMLElement)) {
        return;
      }
      onClosed();
    };

    document.addEventListener("mousedown", closeModal);
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("mousedown", closeModal);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [onClosed]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {createPortal(
        <div className="modal-overlay">
          <div className="modal-container" ref={modalRef}>
            <div className="modal-header-container">
              <div className="modal-header">{header}</div>
              <button onClick={onClosed}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                >
                  <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                </svg>
              </button>
            </div>
            <div
              className="modal-body"
              style={{ height: (videoWidth * 9) / 16 }}
            >
              <iframe
                title={title}
                width={videoWidth}
                height={(videoWidth * 9) / 16}
                src={url}
                frameBorder="0"
                allowFullScreen
                allow="autoplay"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default ModalVideo;
