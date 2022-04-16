import { SlackApi } from '.'

  export class Controller {
    public blockKit: SlackApi.BlockKit.Controller = new SlackApi.BlockKit.Controller();

    public app: any
  
    public start(signingSecret: string, botUserOAuthAccessToken: string) {
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
      })
    }
  
    public home(blocks: any, botUserOAuthAccessToken: string) {
      this.app.event('app_home_opened', async ({ event, client }) => {
        this.app.client.views.publish({
          token: botUserOAuthAccessToken,
          user_id: event.user,
          view: {
            type: 'home',
            blocks: blocks
          }
        })
      })
    }
  
    public command(value: any) {
      this.app.command('/' + value.trigger, async ({ command, ack, client }) => {
        await ack()
  
        value.callback(command, client)
      })
    }
  
    public action(value: any) {
      this.app.action(value.trigger, async ({ ack, body, client }) => {
        await ack()
  
        value.callback(body, client)
      })
    }
  
    public view(value: any) {
      this.app.view(value.trigger, async ({ ack, body, view, context }) => {
        await ack()
  
        value.callback(body, view, context)
      })
    }
  
    public event(value: any) {
      this.app.event(value.trigger, async ({ event, client }) => {
        value.callback(event, client)
      })
    }
  }
  