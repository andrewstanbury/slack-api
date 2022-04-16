import { Option } from ".";
export interface State {
    text: Option.Text.State;
    description: Option.Description.State;
    value: string;
}
