import { describe, it, expect } from "vitest"
import { SalarySlipGenerator } from "./SalarySlipGenerator.js"

describe("Default test", () => {
  it("should work", () => {
    const salarySlipGenerator = new SalarySlipGenerator()
    const employee = new Employee()

    const generateFor = salarySlipGenerator.generateFor(employee)

    const expected = new SalarySlip(12345, "John J Doe", 5000)

    expect(generateFor.equals(expected)).toBe(true)
  })
})
