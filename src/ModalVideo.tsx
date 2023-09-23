import { useEffect, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

import "./ModalVideo.css";
import { useWindowObserver } from "./useWidowObserver";
import CloseBtn from "./CloseBtn";

interface Props {
  // is modal open
  isOpen: boolean;
  // set function to close modal
  onClosed: () => void;
  // set video url
  url: string;
  // set video title
  title: string;
  // set modal header
  header?: string | JSX.Element;
  // set fix video with
  width?: number;
  // iframe ratio of widow
  widthRatio?: number;
  // iframe ratio of width, height
  ratio?: number[];
  // control auto play
  autoPlay?: boolean;
}

const MAX_WIDTH = 1200;

function ModalVideo({
  isOpen = false,
  onClosed,
  url,
  title,
  header,
  width,
  widthRatio = 0.8,
  ratio = [9, 16],
  autoPlay = true,
}: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { observerWidth } = useWindowObserver();
  const [wRatio, hRatio] = ratio;
  const widowWidth = observerWidth * widthRatio;
  const videoWidth = width ?? Math.min(widowWidth * widthRatio, MAX_WIDTH);
  const videoHeight = (videoWidth * wRatio) / hRatio;

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        onClosed();
      }
    };
    const closeModal = (e: MouseEvent) => {
      if (modalRef?.current?.contains(e.target as HTMLElement)) {
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
          <div
            className={`${header ? "modal-container" : "no-header"}`}
            ref={modalRef}
          >
            {header ? (
              <>
                <div className="modal-header-container">
                  <div className="modal-header">{header}</div>
                  <CloseBtn primary onClosed={onClosed} />
                </div>
              </>
            ) : (
              <div className="no-header-btn">
                <CloseBtn onClosed={onClosed} />
              </div>
            )}
            <div
              className="modal-body"
              style={{ height: Math.floor(videoHeight), width: videoWidth }}
            >
              <iframe
                title={title}
                width={videoWidth}
                height={videoHeight}
                src={url}
                allow={`${autoPlay && "autoplay"}`}
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
