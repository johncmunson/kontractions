// import spliceString from 'splice-string'
const spliceString = require('splice-string')
import contractionsTable from './contractionsTable.js'
import longformsTable from './longformsTable.js'

const kontractions = {
    contractionsTable,
    longformsTable,
    addContractions: function(obj) {
        Object.assign(this.contractionsTable, obj)
    },
    addLongforms: function(obj) {
        Object.assign(this.longformsTable, obj)
    },
    getIndicesOf: function(searchStr, str) {
        var searchStrLen = searchStr.length;
        if (searchStrLen == 0) {
            return [];
        }
        var startIndex = 0, index, indices = [];
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
        while ((index = str.indexOf(searchStr, startIndex)) > -1) {
            indices.push(index);
            startIndex = index + searchStrLen;
        }
        return indices;
    },
    expand: function(str) {
        // normalize string
        str = str.toLowerCase()
        // get an array of contractions, sorted by length
        const keys = Object.keys(this.contractionsTable)
        // for every contraction...
        for (let i = 0; i < keys.length; i++) {
            // find all the places it occurs in the string
            const indices = this.getIndicesOf(keys[i], str)

        }
    },
    contract: function(str) {
        str = str.toLowerCase()
        const keys = Object.keys(this.longformsTable).sort((a,b) => b.length - a.length)
        // for every longform...
        for (let i = 0; i < keys.length; i++) {
            // get longform length
            const length = keys[i].length
            // find all the places it occurs in the string
            const indices = this.getIndicesOf(keys[i], str).sort((a,b) => b - a)
            // at each location, replace longform with contraction
            for (let g = 0; g < indices.length; g++) {
                str = spliceString(str, indices[g], length, this.longformsTable[keys[i]])
            }
        }
        return str
    }
}

export default kontractions
