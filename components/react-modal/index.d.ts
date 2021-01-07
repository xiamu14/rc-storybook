import React, { ReactNode } from "react";
import "./style.scss";
interface Props {
    children?: ReactNode;
    className?: string;
    mask?: boolean;
    header?: boolean;
    duration?: number;
}
export interface RefType {
    show: () => void;
    hide: () => void;
}
declare const Modal: React.ForwardRefExoticComponent<Props & React.RefAttributes<RefType>>;
export default Modal;
