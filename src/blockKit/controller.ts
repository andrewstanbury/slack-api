import { BlockKit } from '.'

export class Controller {
  public Parse(json: string): BlockKit.Blocks.State {
    const blocksState: BlockKit.Blocks.State = JSON.parse(json);

    return blocksState;
  }
}
