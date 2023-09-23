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
  // set max width number, default max is 1200
  // Note: could be improve to adaptive different device or larger monitor
  maxWidth?: number;
  // set fixed video width
  width?: number;
  // use with fixed width
  responsive?: boolean;
  // iframe ratio of window
  widthRatio?: number;
  // iframe ratio of width, height
  ratio?: number[];
  // control auto play
  autoPlay?: boolean;
}

const MAX_WIDTH = 1200;
const DEFAULT_WIDTH_RATIO = 0.8;
const DEFAULT_RATIO = [9, 16];

function ModalVideo({
  isOpen = false,
  onClosed,
  url,
  title,
  header,
  maxWidth = MAX_WIDTH,
  width,
  responsive: isResponsive = false,
  widthRatio = DEFAULT_WIDTH_RATIO,
  ratio = DEFAULT_RATIO,
  autoPlay = true,
}: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { observerWidth } = useWindowObserver();
  const [wRatio, hRatio] = ratio;
  const widowWidth = observerWidth * widthRatio;

  // Default MAX_WIDTH is 1200px. Discard maxWidth, if larger than it
  const _maxWidth = Math.min(MAX_WIDTH, maxWidth);
  // 1. If set fix width, use it.
  // 2. If set fix width and responsive, set it width reponsive ration (only smaller than it)
  // 3. Otherwise, use responsive width, maximum is MAX_WIDTH
  const videoWidth = width
    ? isResponsive
      ? Math.min(widowWidth, width)
      : width
    : Math.min(widowWidth, _maxWidth);
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
