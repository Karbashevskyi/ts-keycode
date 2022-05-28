import * as accents from './consts/accents.const';
import * as alphabet from './consts/alphabet.const';
import * as commands from './consts/commands.const';
import * as f from './consts/f.const';
import * as functions from './consts/functions.const';
import * as numbers from './consts/numbers.const';
import * as numpad from './consts/numpad.const';
import * as operators from './consts/operators.const';
import * as select from './consts/select.const';
import { KeycodeInterface } from './interfaces/keycode.interface';
import { KeycodeEnum } from './enums/index.enum';

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
  select,
};
