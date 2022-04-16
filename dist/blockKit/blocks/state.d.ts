import { Blocks } from '.';
export interface State {
    dispatch_action: boolean;
    type: string;
    text: Blocks.Text.State;
    fileds: Array<Blocks.Field.State>;
    accessory: Blocks.Accessory.State;
    element: Blocks.Element.State;
    elements: Array<Blocks.Element.State>;
    title: Blocks.Text.State;
    image_url: string;
    alt_text: string;
    label: Blocks.Label.State;
}
