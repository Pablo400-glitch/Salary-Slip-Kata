import { Employee } from "./Employee.js"
import { SalarySlip } from "./SalarySlip.js"

export class SalarySlipGenerator {
  generateFor(employee: Employee): SalarySlip {
    return { id: 12345, name: "John J Doe", monthlyGrossSalary: 416.67 }
  }
}
