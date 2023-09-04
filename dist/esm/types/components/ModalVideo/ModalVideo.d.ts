import "./ModalVideo.css";
type Props = {
    isOpen: boolean;
    onClosed: () => void;
    url: string;
    title: string;
    header?: string | JSX.Element;
    width?: number;
};
declare function ModalVideo({ isOpen, onClosed, url, title, header, width, }: Props): import("react/jsx-runtime").JSX.Element | null;
export default ModalVideo;
