const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');


function calculateSalary(role) {
  
  switch (role) {
    case "ceo":
      console.log("Ceo salary => 2200€");
      break;
    case "manager":
      console.log("Manager salary => 1800€");
      break;
    case "cto":
      console.log("Cto salary => 1800€");
      break;
    case "developer":
      console.log("Developer salary => 1500€");
      break;
    default:
      console.log("Other salary => 1000€");
      break;
  }
}

console.log(calculateSalary)