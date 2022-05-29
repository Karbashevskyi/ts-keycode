# ts-keycode
![NPM Latest Version](https://img.shields.io/npm/v/ts-keycode)
![Downloads Count](https://img.shields.io/npm/dm/ts-keycode.svg)
![Bundle Size](https://packagephobia.now.sh/badge?p=ts-keycode)
![Test Status](https://img.shields.io/travis/karbashevskyi/ts-keycode/main.svg)
![Last Update Date](https://img.shields.io/github/last-commit/karbashevskyi/ts-keycode)
![Project License](https://img.shields.io/github/license/karbashevskyi/ts-keycode)

## Installation

```bash
$ npm install ts-keycode
```

## Import
```typescript
/**
 * It is a map with all keyboard codes
 */
import {keycode} from 'ts-keycode';

/**
 *  Or if you need segregate by segemnts:
 *  accents,
 *  alphabet,
 *  commands,
 *  f,
 *  functions,
 *  numbers,
 *  numpad,
 *  operators,
 *  select
 *  
 *  Use it below
 */
import {keycodeSegments} from 'ts-keycode';
```

## Examples
```typescript
import {NumbersEnum} from 'ts-keycode/consts/numbers';
import {NumpadEnum} from 'ts-keycode/consts/numpad';

const twoFactorId: string = 'authorization-login-form-two-factor-code';
const inputTwoFactor: HTMLInputElement = document.getElementById(twoFactorId);

// ...

const allowKeyboardCodesMap: (typeof NumbersEnum | typeof NumpadEnum)[] = {
    ...NumbersEnum,
    ...NumpadEnum
};

// ...

inputTwoFactor.addEventListener('keydown', ($event) => {
   if ($event?.isTrusted) {

       // ...
       const keycode: number = $event.which ?? $event.keyCode;
       if (allowKeyboardCodes.hasOwnProperty(keycode)) {
           
           // ...
           
       }
       // ...

   } 
});
```

## My Social Network Links
[Twitter Profile](https://twitter.com/Karbashevskyi)

[LinkedIn Profile](https://www.linkedin.com/in/ivan-karbashevskyi/)

[GitHub Profile](https://github.com/Karbashevskyi)

[medium.com Profile](https://medium.com/@ivankarbashevskyi)

[Pateron Profile](https://www.patreon.com/karbash)
