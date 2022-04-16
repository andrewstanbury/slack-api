import { Blocks } from '.'

export class Controller {
    public Parse(object: any): Blocks.State {
        const blocksState: Blocks.State = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

        return blocksState;
    }
}