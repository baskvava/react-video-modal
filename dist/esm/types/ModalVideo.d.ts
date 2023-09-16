import './ModalVideo.css';
interface Props {
    isOpen: boolean;
    onClosed: () => void;
    url: string;
    title: string;
    header?: string | JSX.Element;
    width?: number;
    widthRatio?: number;
    ratio?: number[];
}
declare function ModalVideo({ isOpen, onClosed, url, title, header, width, widthRatio, // iframe ratio of widow
ratio }: Props): import("react/jsx-runtime").JSX.Element | null;
export default ModalVideo;
