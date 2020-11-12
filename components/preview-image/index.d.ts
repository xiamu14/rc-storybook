/// <reference types="react" />
import "./index.scss";
interface Props {
    /** @description 图片链接地址 */
    src: string;
    /** @description 小图尺寸， 默认 40 * 40 */
    width?: number;
    height?: number;
    /** @description 全图尺寸， 默认 460 * auto */
    fullWidth?: number;
    /** @description 是否显示蒙版, 默认显示 */
    mask?: boolean;
}
export default function PreviewImg(props: Props): JSX.Element;
export {};
