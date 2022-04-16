import { SlackApi } from '.';
export declare class Controller {
    blockKit: SlackApi.BlockKit.Controller;
    app: any;
    start(signingSecret: string, botUserOAuthAccessToken: string): void;
    home(blocks: any, botUserOAuthAccessToken: string): void;
    command(value: any): void;
    action(value: any): void;
    view(value: any): void;
    event(value: any): void;
}
