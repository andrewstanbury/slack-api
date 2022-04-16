import { Accessory } from '.'

export interface State {
    type: string
    text: Accessory.Text.State
    initial_date: string
    initial_time: string
    placeholder: Accessory.Placeholder.State
    options: Array<Accessory.Option.State>
    value: string
    url: string
    action_id: string
    image_url: string
    alt_text: string
}