const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function() {
    let test;

    beforeEach(() => {
        test = new Word("testword");
    });

    describe("Word constructor function", function() {
        it('should have a "word" property', function() {
            expect(test).to.have.property("word");
        });

        it('should set the "word" property when a new word is created', function() {
            expect(test.word).to.eql("testword");
        });
    });

    describe("removeVowels function", function() {
        it("should return a the word with all vowels removed", function() {
            expect(test.removeVowels()).to.eql("tstwrd");
        });
    });

    describe("removeConsonants function", function() {
        it("should return the word with the consonants removed", function() {
            expect(test.removeConsonants()).to.eql("eo");
        });
    });

    describe("pigLatin function", function() {
        it("should return the word converted to pig latin", function() {
            expect(test.pigLatin()).to.eql("estwordtay");
        });
    });
});