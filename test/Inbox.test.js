// contract test code will go here
const assert = require("assert")
const ganache = require("ganache-cli")
// const { Web3 } = require("web3")
const Web3 = require("web3")
const web3 = new Web3(ganache.provider())
const { interface, bytecode } = require("../compile")

let accounts
let inbox

beforeEach(async () => {
	// Get a list of all accounts
	accounts = await web3.eth.getAccounts()

	inbox = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({
			data: bytecode,
			arguments: ["Hi there"]
		})
		.send({ from: accounts[0], gas: "1000000" })
})

describe("Inbox", () => {
	it("deploys a contract", () => {
		console.log(accounts)
		console.log(inbox)
		assert.ok(inbox.options.address)
	})

	it("has a default msg", async () => {
		const message = await inbox.methods.message().call()
		assert.equal(message, "Hi there")
	})

	it("can change msg", async () => {
		await inbox.methods.setMessage("bye").send({ from: accounts[0] })
		const message = await inbox.methods.message().call()
		assert.equal(message, "bye")
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
