import { Employee } from "./Employee.js"
import { SalarySlip } from "./SalarySlip.js"

export class SalarySlipGenerator {
  generateFor(employee: Employee): SalarySlip {
    const monthlyGrossSalary = (parseInt(employee.annualGrossSalary) / 12).toFixed(2)

    return { id: employee.id, name: "John J Doe", monthlyGrossSalary }
  }
}
