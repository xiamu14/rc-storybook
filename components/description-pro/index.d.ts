import { DescriptionsProps } from "antd/lib/descriptions";
import "./index.scss";
import { ReactNode } from "react";
export interface Schema {
    label: string;
    dataIndex: string;
    render?: (val: any, record: any) => ReactNode;
    span?: number;
    sort?: number;
    className?: string;
    prefixCls?: string;
    hide?: ((val: any, record: any) => boolean) | boolean;
}
export interface ItemType {
    [key: string]: string | number;
}
export interface DescriptionsProProps extends DescriptionsProps {
    schema: Schema[];
    data: ItemType;
    /** 文本居中显示(只有显示 border时 才有效果) */
    center?: boolean;
    groups?: {
        title: string;
        children: string[];
    }[];
}
export default function DescriptionsPro(props: DescriptionsProProps): JSX.Element;
