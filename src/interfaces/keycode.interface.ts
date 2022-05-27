import { accents } from "../consts/accents.const";
import { alphabet } from "../consts/alphabet.const";
import { commands } from "../consts/commands.const";
import { f } from "../consts/f.const";
import { functions } from "../consts/functions.const";
import { numbers } from "../consts/numbers.const";
import { numpad } from "../consts/numpad.const";
import { operators } from "../consts/operators.const";
import { select } from "../consts/select.const";

export interface KeycodeInterface {
    accents: typeof accents,
    alphabet: typeof alphabet,
    commands: typeof commands,
    f: typeof f,
    functions: typeof functions,
    numbers: typeof numbers,
    numpad: typeof numpad,
    operators: typeof operators,
    select: typeof select
}
