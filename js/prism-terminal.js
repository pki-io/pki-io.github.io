Prism.languages.terminal = {
    'prompt': {
        pattern: /(\[.*?\][#$]).*\n/,
        inside: {
            'command': {
                pattern: /(\[.+?\][#$] )(.*)\n/,
                lookbehind: true
             }
         }
    }
};

;
