import { Employee } from "./Employee.js"
import { SalarySlip } from "./SalarySlip.js"

export class SalarySlipGenerator {
  generateFor(employee: Employee): SalarySlip {
    const monthlyGrossSalaryInCents = Math.round((employee.annualGrossSalaryInPounds / 12) * 100)

    return { id: employee.id, name: "John J Doe", monthlyGrossSalaryInPounds: monthlyGrossSalaryInCents / 100 }
  }
}
