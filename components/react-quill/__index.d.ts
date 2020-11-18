/// <reference types="react" />
import { QuillOptionsStatic } from "quill";
import "./index.css";
export interface ResFiles {
    url: string;
    width?: string;
    height?: string;
}
interface Props {
    value?: string;
    options?: QuillOptionsStatic;
    width?: string;
    height?: string;
    minHeight?: string;
    medioRequest?: (files: FileList[], type: "image" | "video") => Promise<ResFiles>;
    onChange?: (html: string) => void;
}
export default function ReactQuill(props: Props): JSX.Element;
export {};
