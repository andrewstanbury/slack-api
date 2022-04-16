"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const _1 = require(".");
class Controller {
    constructor() {
        this.blockKit = new _1.SlackApi.BlockKit.Controller();
    }
    start(signingSecret, botUserOAuthAccessToken) {
        const { App } = require('@slack/bolt');
        this.app = new App({
            signingSecret: signingSecret,
            token: botUserOAuthAccessToken,
            endpoints: {
                events: '/slack/events',
                commands: '/slack/commands',
                action: '/slack/action-endpoint',
                interactive: '/slack/interactive-endpoint'
            }
        });
    }
    home(blocks, botUserOAuthAccessToken) {
        this.app.event('app_home_opened', ({ event, client }) => __awaiter(this, void 0, void 0, function* () {
            this.app.client.views.publish({
                token: botUserOAuthAccessToken,
                user_id: event.user,
                view: {
                    type: 'home',
                    blocks: blocks
                }
            });
        }));
    }
    command(value) {
        this.app.command('/' + value.trigger, ({ command, ack, client }) => __awaiter(this, void 0, void 0, function* () {
            yield ack();
            value.callback(command, client);
        }));
    }
    action(value) {
        this.app.action(value.trigger, ({ ack, body, client }) => __awaiter(this, void 0, void 0, function* () {
            yield ack();
            value.callback(body, client);
        }));
    }
    view(value) {
        this.app.view(value.trigger, ({ ack, body, view, context }) => __awaiter(this, void 0, void 0, function* () {
            yield ack();
            value.callback(body, view, context);
        }));
    }
    event(value) {
        this.app.event(value.trigger, ({ event, client }) => __awaiter(this, void 0, void 0, function* () {
            value.callback(event, client);
        }));
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map