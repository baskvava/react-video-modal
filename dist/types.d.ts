import * as react_jsx_runtime from 'react/jsx-runtime';

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
ratio }: Props): react_jsx_runtime.JSX.Element | null;

interface UseToggleReturnType {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
}
declare function useToggle(): UseToggleReturnType;

export { ModalVideo, useToggle };
