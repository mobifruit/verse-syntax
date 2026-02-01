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

  // Keywords (core Verse structure)
  'keyword': /\b(module|class|interface|struct|enum|event|if|else|for|while|loop|return|break|continue|var|const|set|function|using|import|public|private|protected|override|abstract|native)\b/,

  // Boolean literals
  'boolean': /\b(true|false)\b/,//Optionally: null|undefined

  // Numbers
  'number': /\b\d+(?:\.\d+)?\b/,

  // Types (lowerCamelCase before parentheses)
  'class-name': /\b[a-z_][A-Za-z0-9_]*(?=\s*\()/,///\b[A-Z][A-Za-z0-9_]*\b/

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
