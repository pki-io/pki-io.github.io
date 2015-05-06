Prism.languages.terminal = {
    'prompt': {
        pattern: /(\[.+?\][#$] ).*?(?:\\\n.*?)*\n/,
        inside: {
            'command': {
                pattern: /(\[.+?\][#$] )(.*?(?:\\\n.*?)*)\n/,
                lookbehind: true
             }
         }
    }
};

;
