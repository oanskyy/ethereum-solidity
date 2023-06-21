// contract test code will go here
const assert = require("assert")
const ganache = require("ganache-cli")
// const { Web3 } = require("web3")
const Web3 = require("web3")
const web3 = new Web3(ganache.provider())

let accounts

beforeEach(async () => {
	// Get a list of all accounts
	accounts = await web3.eth.getAccounts()
})

describe("Inbox", () => {
	it("deploys a contract", () => {
		console.log(accounts)
	})
})

// Mocha Test Exmample
// Mocha Test Exmample
// class Car {
// 	park() {
// 		return "stopped"
// 	}

// 	drive() {
// 		return "vroom"
// 	}
// }

// let car
// beforeEach(() => {
// 	car = new Car()
// })

// describe("Car", () => {
// 	it("can park", () => {
// 		assert.equal(car.park(), "stopped")
// 	})

// 	it("can drive", () => {
// 		assert.equal(car.drive(), "vroom")
// 	})
// })
// Mocha Test Exmample
// Mocha Test Exmample
