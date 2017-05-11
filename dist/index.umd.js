(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, function () { 'use strict';

    var spliceString = require('splice-string');
    var contractionsTable = require('./contractionsTable.js');
    var longformsTable = require('./longformsTable.js');

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
                    } else {
                        insertion = this.contractionsTable[keys[i]];
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
                    str = spliceString(str, indices[g], length, this.longformsTable[keys[i]]);
                }
            }
            return str;
        }
    };

    module.exports = kontractions;

}));
//# sourceMappingURL=index.umd.js.map