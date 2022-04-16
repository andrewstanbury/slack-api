import { Element } from '.';
export interface State {
    type: string;
    initial_date: string;
    initial_time: string;
    placeholder: Element.Placeholder.State;
    options: Array<Element.Option.State>;
    filter: Element.Filter.State;
    initial_conversation: string;
    initial_user: string;
    initial_channel: string;
    value: string;
    multiline: string;
    action_id: string;
    text: string | Element.Text.State;
    emoji: boolean;
    image_url: string;
    alt_text: string;
    dispatch_action_config: Element.DispatchActionConfig.State;
}
