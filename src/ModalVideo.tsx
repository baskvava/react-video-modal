import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./ModalVideo.css";
import { useWindowObserver } from "./useWidowObserver";
import CloseBtn from "./CloseBtn";
import StartClassicBtn from "./buttons/start/ClassicBtn";
import StopClassicBtn from "./buttons/stop/ClassicBtn";
import MutedClassicBtn from "./buttons/muted/ClassicBtn";
import NotMutedClassicBtn from "./buttons/notMuted/ClassicBtn";

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
  // media type
  type?: "video" | "iframe";
  // video control,
  // 1. custom is from library
  // 2. default is native
  // 3. hidden is hide control
  controls?: "custom" | "default" | "hidden";
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
  // media type
  type = "video",
  controls = "custom",
}: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const volumnRef = useRef<HTMLInputElement | null>(null);
  const timeRangeRef = useRef<HTMLInputElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [duration, setDuration] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (videoRef.current && type === "video") {
        if (autoPlay) {
          videoRef.current.play();
        }

        videoRef.current.addEventListener("loadeddata", (event: any) => {
          setDuration(event.target.duration);
        });

        videoRef.current.addEventListener("timeupdate", (event: any) => {
          const cTime = event.target.currentTime;
          setCurrentTime(cTime);
        });
      }
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    if (timeRangeRef.current && duration) {
      timeRangeRef.current.style.backgroundSize = `${
        (currentTime * 100) / duration
      }% ${100}%`;
      timeRangeRef.current.value = currentTime.toString();
    }
  }, [currentTime]);

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
              {type === "video" ? (
                <div
                  className="video-frame"
                  style={{ height: Math.floor(videoHeight) }}
                >
                  <video
                    controls={
                      controls === "default"
                        ? true
                        : controls === "custom"
                        ? false
                        : controls !== "hidden"
                    }
                    ref={videoRef}
                    width={videoWidth}
                  >
                    <source src={url} type="video/mp4" />
                  </video>
                  {controls === "custom" && (
                    <div className="controls">
                      {/* first section */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          paddingLeft: "6px",
                        }}
                      >
                        {/* button */}
                        {isPlaying ? (
                          <button
                            className="start"
                            aria-label="play pause toggle"
                            onClick={() => {
                              videoRef.current && videoRef.current.pause();
                              setIsPlaying(false);
                            }}
                          >
                            <StopClassicBtn />
                          </button>
                        ) : (
                          <button
                            className="start"
                            aria-label="play pause toggle"
                            onClick={() => {
                              videoRef.current && videoRef.current.play();
                              setIsPlaying(true);
                            }}
                          >
                            <StartClassicBtn />
                          </button>
                        )}
                        {/* time */}
                        <span className="time">
                          {`${Math.floor(currentTime / 60)} : ${Math.floor(
                            currentTime % 60
                          )}`}{" "}
                          /{" "}
                          {duration && !isNaN(duration)
                            ? `${Math.floor(duration / 60)} : ${Math.floor(
                                duration % 60
                              )}`
                            : ""}
                        </span>
                      </div>
                      {/* time slider */}
                      <div
                        style={{
                          paddingLeft: "10px",
                          flex: "1 1 auto",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        {duration && (
                          <input
                            ref={timeRangeRef}
                            type="range"
                            min={0}
                            max={duration}
                            step={0.1}
                            onChange={(e) => {
                              if (videoRef.current && timeRangeRef.current) {
                                const val = Number(e.target.value);
                                videoRef.current.currentTime = val;
                                timeRangeRef.current.style.backgroundSize = `${
                                  (val * 100) / duration
                                }% ${100}%`;
                              }
                            }}
                          />
                        )}
                      </div>
                      {/* muted */}
                      {isMuted ? (
                        <button
                          className="start"
                          aria-label="muted not muted toggle"
                          onClick={() => {
                            if (videoRef.current && volumnRef.current) {
                              videoRef.current.muted = false;
                              setIsMuted(false);
                              volumnRef.current.value = "0.5";
                              volumnRef.current.style.backgroundSize = `${50}% ${100}%`;
                            }
                          }}
                        >
                          <MutedClassicBtn />
                        </button>
                      ) : (
                        <button
                          className="start"
                          aria-label="muted not muted toggle"
                          onClick={() => {
                            if (videoRef.current && volumnRef.current) {
                              videoRef.current.muted = true;
                              setIsMuted(true);
                              volumnRef.current.value = "0";
                              volumnRef.current.style.backgroundSize = `${0}% ${100}%`;
                            }
                          }}
                        >
                          <NotMutedClassicBtn />
                        </button>
                      )}
                      {/* volume */}
                      <div className="volumn">
                        <input
                          ref={volumnRef}
                          type="range"
                          min={0}
                          max={1}
                          step={0.1}
                          disabled={isMuted}
                          onChange={(e) => {
                            if (videoRef.current && volumnRef.current) {
                              const val = Number(e.target.value);
                              videoRef.current.volume = val;
                              volumnRef.current.style.backgroundSize = `${
                                val * 100
                              }% ${100}%`;
                            }
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <iframe
                  title={title}
                  width={videoWidth}
                  height={videoHeight}
                  src={url}
                  allow={`${autoPlay && "autoplay"}`}
                />
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default ModalVideo;
