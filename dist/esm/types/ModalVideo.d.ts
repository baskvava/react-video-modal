import "./ModalVideo.css";
interface Props {
    isOpen: boolean;
    onClosed: () => void;
    url: string;
    title: string;
    header?: string | JSX.Element;
    maxWidth?: number;
    width?: number;
    responsive?: boolean;
    widthRatio?: number;
    ratio?: number[];
    autoPlay?: boolean;
}
declare function ModalVideo({ isOpen, onClosed, url, title, header, maxWidth, width, responsive: isResponsive, widthRatio, ratio, autoPlay, }: Props): import("react/jsx-runtime").JSX.Element | null;
export default ModalVideo;
