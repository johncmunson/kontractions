'use strict';

var spliceString = require('splice-string');

var contractionsTable = {
    "ain't": ['am not', 'are not', 'is not', 'has not', 'have not'],
    "aren't": ['are not'],
    "can't": ['cannot'],
    "could've": ['could have'],
    "couldn't've": ['could not have'],
    "couldn't": ['could not'],
    "didn't": ['did not'],
    "doesn't": ['does not'],
    "don't": ['do not'],
    "gonna": ['going to'],
    "gotta": ['got a', 'got an', 'got to'],
    "hadn't've": ['had not have'],
    "hadn't": ['had not'],
    "hasn't": ['has not'],
    "haven't": ['have not'],
    "he'd've": ['he would have'],
    "he'd": ['he had', 'he would'],
    "he'll": ['he shall', 'he will'],
    "he's": ['he has', 'he is'],
    "how'd": ['how did', 'how would'],
    "how'll": ['how will'],
    "how's": ['how does', 'how has', 'how is'],
    "i'd've": ['i would have'],
    "i'd": ['i had', 'i would'],
    "i'll": ['i shall', 'i will'],
    "i'm": ['i am'],
    "i've": ['i have'],
    "i'ven't": ['i have not'],
    "isn't": ['is not'],
    "it'd've": ['it would have'],
    "it'd": ['it would'],
    "it'll": ['it shall', 'it will'],
    "it's": ['it has', 'it is'],
    "let's": ['let us'],
    "might've": ['might have'],
    "mightn't've": ['might not have'],
    "mightn't": ['might not'],
    "must've": ['must have'],
    "mustn't": ['must not'],
    "needn't": ['need not'],
    "not've": ['not have'],
    "ol'": ['old'],
    "oughtn't": ['ought not'],
    "shan't": ['shall not'],
    "she'd've": ['she would have'],
    "she'd": ['she had', 'she would'],
    "she'll": ['she shall', 'she will'],
    "she's": ['she has', 'she is'],
    "should've": ['should have'],
    "shouldn't've": ['should not have'],
    "shouldn't": ['should not'],
    "somebody'd've": ['somebody would have'],
    "somebody'd": ['somebody would', 'someone had'],
    "somebody'll've": ['somebody will have'],
    "somebody'll": ['somebody will'],
    "somebody's": ['somebody has', 'somebody is'],
    "someone'd've": ['someone would have'],
    "someone'd": ['someone had', 'someone would'],
    "someone'll": ['someone will'],
    "someone's": ['someone is', 'someone has'],
    "something'd've": ['something would have'],
    "something'd": ['someone would', 'something had'],
    "something'll": ['something will'],
    "something's": ['something has', 'something is'],
    "that'd": ['that had', 'that would'],
    "that'll": ['that shall', 'that will'],
    "that's": ['that has', 'that is'],
    "there'd've": ['there would have'],
    "there'd": ['there had', 'there would'],
    "there're": ['there are'],
    "there's": ['there has', 'there is'],
    "they'd've": ['they would have'],
    "they'd": ['they had', 'they would'],
    "they'll": ['they shall', 'they will'],
    "they're": ['they are'],
    "they've": ['they have'],
    "they'ven't": ['they have not'],
    "wanna": ['want a', 'want an', 'want to'],
    "wasn't": ['was not'],
    "we'd've": ['we would have'],
    "we'd": ['we had', 'we would'],
    "we'dn't've": ['we would not have'],
    "we'll": ['we will'],
    "we're": ['we are'],
    "we've": ['we have'],
    "weren't": ['were not'],
    "what'd": ['what did'],
    "what'll": ['what shall', 'what will'],
    "what're": ['what are'],
    "what's": ['what does', 'what has', 'what is'],
    "what've": ['what have'],
    "when's": ['when has', 'when is'],
    "where'd": ['where did'],
    "where're": ['where are'],
    "where's": ['where does', 'where has', 'where is'],
    "where've": ['where have'],
    "who'd've": ['who would have'],
    "who'd": ['who did', 'who had', 'who would'],
    "who'll": ['who shall', 'who will'],
    "who're": ['who are'],
    "who's": ['who does', 'who has', 'who is'],
    "who've": ['who have'],
    "why'd": ['why did'],
    "why'll": ['why will'],
    "why're": ['why are'],
    "why's": ['why does', 'why has', 'why is'],
    "why've": ['why have'],
    "will've": ['will have'],
    "won't've": ['will not have'],
    "won't": ['will not'],
    "would've": ['would have'],
    "wouldn't've": ['would not have'],
    "wouldn't": ['would not'],
    "y'all'd've": ['you all would have'],
    "y'all'dn't've": ['you all would not have'],
    "y'all'll've": ['you all will have'],
    "y'all'll": ['you all will'],
    "y'all've": ['you all have'],
    "y'all'ven't": ['you all have not'],
    "y'all": ['you all'],
    "you'd've": ['you would have'],
    "you'd": ['you had', 'you would'],
    "you'll": ['you shall', 'you will'],
    "you're": ['you are'],
    "you'ren't": ['you are not'],
    "you've": ['you have'],
    "you'ven't": ['you have not']
};

var longformsTable = {
    "am not": "ain't",
    "are not": "ain't",
    "cannot": "can't",
    "could have": "could've",
    // "could not have": "couldn't've",
    "could not": "couldn't",
    "did not": "didn't",
    "do not": "don't",
    "does not": "doesn't",
    "going to": "gonna",
    "got a": "gotta",
    "got an": "gotta",
    "got to": "gotta",
    // "had not have": "hadn't've",
    "had not": "hadn't",
    "has not": "hasn't",
    "have not": "haven't",
    "he had": "he'd",
    "he has": "he's",
    "he is": "he's",
    "he shall": "he'll",
    "he will": "he'll",
    // "he would have": "he'd've",
    "he would": "he'd",
    "how did": "how'd",
    "how does": "how's",
    "how has": "how's",
    "how is": "how's",
    "how will": "how'll",
    "how would": "how'd",
    "i am": "i'm",
    "i had": "i'd",
    // "i have not": "i'ven't",
    "i have": "i've",
    "i shall": "i'll",
    "i will": "i'll",
    // "i would have": "i'd've",
    "i would": "i'd",
    "is not": "isn't",
    "it has": "it's",
    "it is": "it's",
    "it shall": "it'll",
    "it will": "it'll",
    // "it would have": "it'd've",
    "it would": "it'd",
    "let us": "let's",
    "might have": "might've",
    // "might not have": "mightn't've",
    "might not": "mightn't",
    "must have": "must've",
    "must not": "mustn't",
    "need not": "needn't",
    // "not have": "not've",
    // "old": "ol'",
    "ought not": "oughtn't",
    "shall not": "shan't",
    "she had": "she'd",
    "she has": "she's",
    "she is": "she's",
    "she shall": "she'll",
    "she will": "she'll",
    // "she would have": "she'd've",
    "she would": "she'd",
    "should have": "should've",
    // "should not have": "shouldn't've",
    "should not": "shouldn't",
    "somebody had": "somebody'd",
    "somebody has": "somebody's",
    "somebody is": "somebody's",
    "somebody will have": "somebody'll've",
    "somebody will": "somebody'll",
    // "somebody would have": "somebody'd've",
    "somebody would": "somebody'd",
    "someone had": "someone'd",
    "someone is": "someone's",
    "someone will": "someone'll",
    // "someone would have": "someone'd've",
    "someone would": "someone'd",
    "something had": "something'd",
    "something has": "something's",
    "something is": "something's",
    "something will": "something'll",
    // "something would have": "something'd've",
    "something would": "something'd",
    "someone has": "someone's",
    "that had": "that'd",
    "that has": "that's",
    "that is": "that's",
    "that shall": "that'll",
    "that will": "that'll",
    "that would": "that'd",
    "there are": "there're",
    "there had": "there'd",
    "there has": "there's",
    "there is": "there's",
    // "there would have": "there'd've",
    "there would": "there'd",
    "they are": "they're",
    "they had": "they'd",
    // "they have not": "they'ven't",
    "they have": "they've",
    "they shall": "they'll",
    "they will": "they'll",
    // "they would have": "they'd've",
    "they would": "they'd",
    "want a": "wanna",
    "want an": "wanna",
    "want to": "wanna",
    "was not": "wasn't",
    "we are": "we're",
    "we had": "we'd",
    "we have": "we've",
    "we will": "we'll",
    "we would have": "we'd've",
    "we would not have": "we'dn't've",
    "we would": "we'd",
    "were not": "weren't",
    "what are": "what're",
    "what did": "what'd",
    "what does": "what's",
    "what has": "what's",
    "what have": "what've",
    "what is": "what's",
    "what shall": "what'll",
    "what will": "what'll",
    "when has": "when's",
    "when is": "when's",
    "where are": "when're",
    "where did": "where'd",
    "where does": "where's",
    "where has": "where's",
    "where have": "where've",
    "where is": "where's",
    "who are": "who're",
    "who did": "who'd",
    "who does": "who's",
    "who had": "who'd",
    "who has": "who's",
    "who have": "who've",
    "who is": "who's",
    "who shall": "who'll",
    "who will": "who'll",
    // "who would have": "who'd've",
    "who would": "who'd",
    "why are": "why're",
    "why did": "why'd",
    "why does": "why's",
    "why has": "why's",
    "why have": "why've",
    "why is": "why's",
    "why will": "why'll",
    "will have": "will've",
    // "will not have": "won't've",
    "will not": "won't",
    "would have": "would've",
    // "would not have": "wouldn't've",
    "would not": "wouldn't",
    // "you all have not": "y'all'ven't",
    // "you all have": "y'all've",
    // "you all will have": "y'all'll've",
    // "you all will": "y'all'll",
    // "you all would have": "y'all'd've",
    // "you all would not have": "y'all'dn't've",
    "you all": "y'all",
    // "you are not": "you'ren't",
    "you are": "you're",
    "you had": "you'd",
    // "you have not": "you'ven't",
    "you have": "you've",
    "you shall": "you'll",
    "you will": "you'll",
    // "you would have": "you'd've",
    "you would": "you'd"
};

var kontractions = {
    contractionsTable: contractionsTable,
    longformsTable: longformsTable,
    updateContractions: function updateContractions(obj) {
        Object.assign(this.contractionsTable, obj);
    },
    updateLongforms: function updateLongforms(obj) {
        Object.assign(this.longformsTable, obj);
    },
    getIndicesOf: function getIndicesOf(searchStr, str) {
        var searchStrLen = searchStr.length;
        if (searchStrLen == 0) {
            return [];
        }
        var startIndex = 0,
            index,
            indices = [];
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
        while ((index = str.indexOf(searchStr, startIndex)) > -1) {
            indices.push(index);
            startIndex = index + searchStrLen;
        }
        return indices;
    },
    expand: function expand(str) {
        // normalize string
        str = str.toLowerCase();
        // get an array of contractions, sorted by length
        var keys = Object.keys(this.contractionsTable);
        // for every contraction...
        for (var i = 0; i < keys.length; i++) {
            // get contraction character length
            var length = keys[i].length;
            // find all the places it occurs in the string
            var indices = this.getIndicesOf(keys[i], str).sort(function (a, b) {
                return b - a;
            });
            // at each location, replace longform with contraction(s)
            for (var g = 0; g < indices.length; g++) {
                var longformLength = this.contractionsTable[keys[i]].length;
                var insertion = void 0;
                if (longformLength > 1) {
                    insertion = '(( ' + this.contractionsTable[keys[i]].join(' | ') + ' ))';
                } else if (longformLength === 1) {
                    insertion = this.contractionsTable[keys[i]];
                } else {
                    insertion = keys[i];
                }
                str = spliceString(str, indices[g], length, insertion);
            }
        }
        return str;
    },
    contract: function contract(str) {
        str = str.toLowerCase();
        var keys = Object.keys(this.longformsTable).sort(function (a, b) {
            return b.length - a.length;
        });
        // for every longform...
        for (var i = 0; i < keys.length; i++) {
            // get longform character length
            var length = keys[i].length;
            // find all the places it occurs in the string
            var indices = this.getIndicesOf(keys[i], str).sort(function (a, b) {
                return b - a;
            });
            // at each location, replace longform with contraction
            for (var g = 0; g < indices.length; g++) {
                if (!this.longformsTable[keys[i]]) {
                    continue;
                }
                str = spliceString(str, indices[g], length, this.longformsTable[keys[i]]);
            }
        }
        return str;
    }
};

module.exports = kontractions;
//# sourceMappingURL=index.js.map