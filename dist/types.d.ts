import * as react_jsx_runtime from 'react/jsx-runtime';

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
declare function ModalVideo({ isOpen, onClosed, url, title, header, maxWidth, width, responsive: isResponsive, widthRatio, ratio, autoPlay, }: Props): react_jsx_runtime.JSX.Element | null;

interface UseToggleReturnType {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
}
declare function useToggle(): UseToggleReturnType;

export { ModalVideo, useToggle };
