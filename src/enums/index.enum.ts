import {AccentsEnum} from "./accents.enum";
import {AlphabetEnum} from "./alphabet.enum";
import {CommandsEnum} from "./commands.enum";
import {FEnum} from "./f.enum";
import {FunctionsEnum} from "./functions.enum";
import {NumbersEnum} from "./numbers.enum";
import {NumpadEnum} from "./numpad.enum";
import {OperatorsEnum} from "./operators.enum";
import {SelectEnum} from "./select.enum";

export const KeycodeEnum = {
    ...AccentsEnum,
    ...AlphabetEnum,
    ...CommandsEnum,
    ...FEnum,
    ...FunctionsEnum,
    ...NumbersEnum,
    ...NumpadEnum,
    ...OperatorsEnum,
    ...SelectEnum,
};
