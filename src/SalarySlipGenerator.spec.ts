import { describe, it, expect } from "vitest"
import { SalarySlipGenerator } from "./SalarySlipGenerator.js"
import { SalarySlip } from "./SalarySlip.js"
import { Employee } from "./Employee.js"

describe("Default test", () => {
  it("should work", () => {
    const salarySlipGenerator = new SalarySlipGenerator()
    const employee: Employee = { id: 12345, name: "John J Doe", annualGrossSalary: "5000" }

    const salarySlip = salarySlipGenerator.generateFor(employee)

    const expectedSalarySlip: SalarySlip = { id: 12345, name: "John J Doe", monthlyGrossSalary: "416.67" }

    expect(salarySlip).toEqual(expectedSalarySlip)
  })

  it("should generate salary slip for employee", () => {
    const salarySlipGenerator = new SalarySlipGenerator()
    const employee: Employee = { id: 123, name: "Manu", annualGrossSalary: "12000" }

    const salarySlip = salarySlipGenerator.generateFor(employee)

    const expectedSalarySlip: SalarySlip = { id: 123, name: "John J Doe", monthlyGrossSalary: "1000.00" }

    expect(salarySlip).toEqual(expectedSalarySlip)
  })
})
