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

  describe('kontractions.expandToList()', () => {

    it("should correctly expand \"She can't have it.\"", () => {
      const expanded = kontractions.expandToList("She can't have it.")
      expect(expanded.length).to.be.equal(1)
      expect(expanded).to.include("she cannot have it.")
    })

    it("should correctly expand \"I'm leaving.\"", () => {
      const expanded = kontractions.expandToList("I'm leaving.")
      expect(expanded.length).to.be.equal(1)
      expect(expanded).to.include("i am leaving.")
    })

    it("should correctly expand \"She won't\"", () => {
      const expanded = kontractions.expandToList("She won't")
      expect(expanded.length).to.be.equal(1)
      expect(expanded).to.include("she will not")
    })

    it("should correctly expand \"I shouldn't've done it.\"", () => {
      const expanded = kontractions.expandToList("I shouldn't've done it.")
      expect(expanded.length).to.be.equal(1)
      expect(expanded).to.include("i should not have done it.")
    })

    it("should correctly expand \"y'all'll've y'all y'all'll\"", () => {
      const expanded = kontractions.expandToList("y'all'll've y'all y'all'll")
      expect(expanded.length).to.be.equal(1)
      expect(expanded).to.include("you all will have you all you all will")
    })

    it("should correctly expand \"I hope there's more food\"", () => {
      const expanded = kontractions.expandToList("I hope there's more food")
      expect(expanded.length).to.be.equal(2)
      expect(expanded).to.include("i hope there is more food")
      expect(expanded).to.include("i hope there has more food")
    })

    it("should correctly expand \"He'll or he won't\"", () => {
      const expanded = kontractions.expandToList("He'll or he won't")
      expect(expanded.length).to.be.equal(2)
      expect(expanded).to.include("he will or he will not")
      expect(expanded).to.include("he shall or he will not")
    })

    it("should correctly expand \"How's she doing? She's doing well.\"", () => {
      const expanded = kontractions.expandToList("How's she doing? She's doing well.")
      expect(expanded.length).to.be.equal(6)
      expect(expanded).to.include("how is she doing? she is doing well.")
      expect(expanded).to.include("how has she doing? she is doing well.")
      expect(expanded).to.include("how does she doing? she is doing well.")
      expect(expanded).to.include("how is she doing? she has doing well.")
      expect(expanded).to.include("how has she doing? she has doing well.")
      expect(expanded).to.include("how does she doing? she has doing well.")
    })

  })

  describe('kontractions.updateContractions()', () => {

    it("should return... 'she can't have it.'", () => {
      kontractions.updateContractions({"can't": false})
      const expandedString = kontractions.expand("She can't have it.")
      expect(expandedString).to.be.equal("she can't have it.")
    })

  })

  describe('kontractions.updateLongforms()', () => {

    it("should return... 'it is cold outside.'", () => {
      kontractions.updateLongforms({"it is": false})
      const contractedString = kontractions.contract("it is cold outside.")
      expect(contractedString).to.be.equal("it is cold outside.")
    })

  })

})
