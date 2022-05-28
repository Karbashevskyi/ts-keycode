"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.keycodeSegments = exports.keycode = void 0;
const accents = __importStar(require("./consts/accents.const"));
const alphabet = __importStar(require("./consts/alphabet.const"));
const commands = __importStar(require("./consts/commands.const"));
const f = __importStar(require("./consts/f.const"));
const functions = __importStar(require("./consts/functions.const"));
const numbers = __importStar(require("./consts/numbers.const"));
const numpad = __importStar(require("./consts/numpad.const"));
const operators = __importStar(require("./consts/operators.const"));
const select = __importStar(require("./consts/select.const"));
const index_enum_1 = require("./enums/index.enum");
exports.keycode = index_enum_1.KeycodeEnum;
exports.keycodeSegments = {
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
