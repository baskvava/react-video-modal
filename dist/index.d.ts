/// <reference types="react" />
import * as react_jsx_runtime from 'react/jsx-runtime';

type Props = {
    isOpen: boolean;
    onClosed: () => void;
    url: string;
    title: string;
    header?: string | JSX.Element;
    width?: number;
};
declare function ModalVideo({ isOpen, onClosed, url, title, header, width, }: Props): react_jsx_runtime.JSX.Element | null;

export { ModalVideo };
