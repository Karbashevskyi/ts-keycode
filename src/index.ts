import {accents} from "./consts/accents.const";
import {alphabet} from "./consts/alphabet.const";
import {commands} from "./consts/commands.const";
import {f} from "./consts/f.const";
import {functions} from "./consts/functions.const";
import {numbers} from "./consts/numbers.const";
import {numpad} from "./consts/numpad.const";
import {operators} from "./consts/operators.const";
import {select} from "./consts/select.const";
import {KeycodeInterface} from "./interfaces/keycode.interface";
import {KeycodeEnum} from "./enums/index.enum";

export const keycode = KeycodeEnum;

export const keycodeSegments: KeycodeInterface = {
    accents,
    alphabet,
    commands,
    f,
    functions,
    numbers,
    numpad,
    operators,
    select
}
