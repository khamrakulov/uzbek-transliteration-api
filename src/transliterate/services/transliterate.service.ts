import { Injectable } from '@nestjs/common';

@Injectable()
export class TransliterateService {
  translitMap: TranslitMap = {
    // Latin => Kirill
    "Sh": "Ш", "Ch": "Ч", "Ng": "Нг", "O'": "Ў", "G'": "Ғ",
    "sh": "ш", "ch": "ч", "ng": "нг", "o'": "ў", "g'": "ғ",
    "A": "А", "B": "Б", "D": "Д", "E": "Е", "F": "Ф",
    "G": "Г", "H": "Ҳ", "I": "И", "J": "Ж", "K": "К",
    "L": "Л", "M": "М", "N": "Н", "O": "О", "P": "П",
    "Q": "Қ", "R": "Р", "S": "С", "T": "Т", "U": "У",
    "V": "В", "X": "Х", "Y": "Й", "Z": "З",
    "a": "а", "b": "б", "d": "д", "e": "е", "f": "ф",
    "g": "г", "h": "ҳ", "i": "и", "j": "ж", "k": "к",
    "l": "л", "m": "м", "n": "н", "o": "о", "p": "п",
    "q": "қ", "r": "р", "s": "с", "t": "т", "u": "у",
    "v": "в", "x": "х", "y": "й", "z": "з", "'": "ъ", "`": "ъ",

    // Kirill => Kirill
    "Ш": "Sh", "Ч": "Ch", "Нг": "Ng", "Ў": "O'", "Ғ": "G'",
    "ш": "sh", "ч": "ch", "нг": "ng", "ў": "o'", "ғ": "g'",
    "А": "A", "Б": "B", "Д": "D", "Е": "E", "Ф": "F",
    "Г": "G", "Ҳ": "H", "И": "I", "Ж": "J", "К": "K",
    "Л": "L", "М": "M", "Н": "N", "О": "O", "П": "P",
    "Қ": "Q", "Р": "R", "С": "S", "Т": "T", "У": "U",
    "В": "V", "Х": "X", "Й": "Y", "З": "Z",
    "а": "a", "б": "b", "д": "d", "е": "e", "ф": "f",
    "г": "g", "ҳ": "h", "и": "i", "ж": "j", "к": "k",
    "л": "l", "м": "m", "н": "n", "о": "o", "п": "p",
    "қ": "q", "р": "r", "с": "s", "т": "t", "у": "u",
    "в": "v", "х": "x", "й": "y", "з": "z", "ъ": "'"
};

  transliterate (text: string) {
    let result = '';
    let i = 0;
    while (i < text.length) {
        const twoChars = text.substr(i, 2);
        if (this.translitMap[twoChars]) {
            result += this.translitMap[twoChars];
            i += 2;
        } else {
            result += this.translitMap[text[i]] || text[i];
            i++;
        }
    }
    return result;
  }
}
