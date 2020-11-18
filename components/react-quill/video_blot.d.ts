declare const BlockEmbed: any;
export default class VideoBlot extends BlockEmbed {
    static create(value: Record<string, any>): any;
    static value(node: any): {
        url: any;
        controls: any;
        width: any;
        height: any;
    };
}
export {};
