const expect = require('chai').expect
const kontractions = require('../src/index.js')

describe('kontractions', () => {

  describe('kontractions.contract()', () => {

    it("should return... 'i didn't do it.'", () => {
      const contractedString = kontractions.contract("I did not do it.")
      expect(contractedString).to.be.equal("i didn't do it.")
    })

    it("should return... 'i didn't do it. he didn't do it either.'", () => {
      const contractedString = kontractions.contract("I did not do it. He did not do it either.")
      expect(contractedString).to.be.equal("i didn't do it. he didn't do it either.")
    })

  })

  describe('kontractions.expand()', () => {

    it("should return... 'she cannot have it.'", () => {
      const expandedString = kontractions.expand("She can't have it.")
      expect(expandedString).to.be.equal("she cannot have it.")
    })

    it("should return... 'i hope (( there has | there is )) more food.'", () => {
      const expandedString = kontractions.expand("I hope there's more food.")
      expect(expandedString).to.be.equal("i hope (( there has | there is )) more food.")
    })

  })

})
