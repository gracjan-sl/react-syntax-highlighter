(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    592: function(e, t, n) {
      'use strict';
      function i(e) {
        e.languages.autoit = {
          comment: [
            /;.*/,
            {
              pattern: /(^\s*)#(?:comments-start|cs)[\s\S]*?^\s*#(?:comments-end|ce)/m,
              lookbehind: !0
            }
          ],
          url: {
            pattern: /(^\s*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,
            lookbehind: !0
          },
          string: {
            pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,
            greedy: !0,
            inside: { variable: /([%$@])\w+\1/ }
          },
          directive: {
            pattern: /(^\s*)#\w+/m,
            lookbehind: !0,
            alias: 'keyword'
          },
          function: /\b\w+(?=\()/,
          variable: /[$@]\w+/,
          keyword: /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
          number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
          boolean: /\b(?:True|False)\b/i,
          operator: /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i,
          punctuation: /[\[\]().,:]/
        };
      }
      (e.exports = i), (i.displayName = 'autoit'), (i.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_autoit-build.js.map
