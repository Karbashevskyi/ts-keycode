import * as accents from '../consts/accents.const';
import * as alphabet from '../consts/alphabet.const';
import * as commands from '../consts/commands.const';
import * as f from '../consts/f.const';
import * as functions from '../consts/functions.const';
import * as numbers from '../consts/numbers.const';
import * as numpad from '../consts/numpad.const';
import * as operators from '../consts/operators.const';
import * as select from '../consts/select.const';

export interface KeycodeInterface {
  accents: typeof accents;
  alphabet: typeof alphabet;
  commands: typeof commands;
  f: typeof f;
  functions: typeof functions;
  numbers: typeof numbers;
  numpad: typeof numpad;
  operators: typeof operators;
  select: typeof select;
}
