import * as react_jsx_runtime from 'react/jsx-runtime';

type Props = {
    isOpen: boolean;
    onClosed: () => void;
    url: string;
    title: string;
    header?: string | JSX.Element;
    width?: number;
    widthRatio?: number;
    ratio?: number[];
};
declare function ModalVideo({ isOpen, onClosed, url, title, header, width, widthRatio, // iframe ratio of widow
ratio, }: Props): react_jsx_runtime.JSX.Element | null;

export { ModalVideo };
