# kata for text builder app

app removes words randomly from a sentence replacing them with <gap>

## yellow belt
- app accepts 1 parameter, text and removes 1 word
- an error is thrown if sentence does not contain 10 words.

## green belt
- app now accepts 2 parameters, text and level (easy, intermediate or difficult)
- if level is easy, remove 1 word
- if level is intermediate, remove 2 words
- if level is difficult, remove 3 words
- if level is undefined or any other word, remove 1 word