import React, { ReactNode } from "react";
import "./style.scss";
export { useModal } from "./hooks/use_modal";
interface Props {
    /** @desc 对话框是否可见 */
    visible: boolean;
    onCancel: () => void;
    children?: ReactNode;
    className?: string;
    mask?: boolean;
    header?: boolean;
    duration?: number;
}
declare const Modal: React.FC<Props>;
export default Modal;
