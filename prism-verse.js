/*
 * Verse Prism Grammar for Discord Highlighter Bot
 * Copyright (c) 2026 3dlux.art by mobifruit
 * Licensed under the Apache License, Version 2.0
 */

Prism.languages.verse = {

  // Comments (# style) as block and inline
  'comment': [
    { pattern: /<#[\s\S]*?#>/, greedy: true },
    { pattern: /#.*/, greedy: true }
  ],

  // Strings
  'string': {
    pattern: /"(?:\\.|[^"\\])*"/,
    greedy: true
  },

  'visibility-specifier': {
    pattern: /<\s*(?:public|internal|protected|private)\s*>/,
    greedy: true,
    alias: 'keyword'
  },

  'class-specifier': {
    pattern: /<\s*(?:concrete|unique|final|persistable)\s*>/,
    greedy: true,
    alias: 'keyword'
  },

  'effect-specifier': {
    pattern: /<\s*(?:converges|decides)\s*>/,
    greedy: true,
    alias: 'keyword'
  },

  'enum-specifier': {
    pattern: /<\s*(?:open|closed)\s*>/,
    greedy: true,
    alias: 'keyword'
  },

  'function-specifier': {
    pattern: /<\s*(?:constructor)\s*>/,
    greedy: true,
    alias: 'keyword'
  },
  
  // Keywords (core Verse structure)
  'keyword': /\b(module|event|profile|block|if|else|case|loop|return|break|for|defer|continue|var|set|function|using|import|override|abstract|native|pure)\b/,

  // Boolean literals
  'boolean': /\b(true|false)\b/,//Optionally: null|undefined

  // Numbers
  'number': /\b\d+(?:\.\d+)?\b/,

  // Types (lowerCamelCase before parentheses)
  'class-name': /\b[a-z_][A-Za-z0-9_]*(?=\s*\()/,///\b[A-Z][A-Za-z0-9_]*\b/

  'common-types': /\b(logic|int|float|string|rational|any|comparable|void)\b/,

  'container-types': /\b(option|array|map)\b/,

  'composite-types': /\b(class|enum|struct|interface|constructor)\b/,

  //<override>|<decides>|<constructor> (special function)

  //Visibility Specifiers: <public>|<internal>|<protected>|<private>
  //Effects / Effect specifiers: <converges>

  // Functions (FirstCaps)
  'function': /\b[A-Z][A-Za-z0-9_]*\b/,///\b[a-z_][A-Za-z0-9_]*(?=\s*\()/

  // Operators
  'operator': /:=|==|!=|<=|>=|=>|\+|-|\*|\/|%|<|>|\b(and|or|not)\b/,

  // Operator-words (and, or, not)

  // Punctuation
  'punctuation': /[{}[\];(),.:]/

  // Namespace (Verse path)

  // Constants (PI, MAX_VALUE)

  // Variables

  // Parameters

  // Properties (only CSS)

  // Attr-names (HTML/XML/JSX)
};
