function Employee (name, role){
    let obj = Object.create(Employee.sharedFunctionality);
    obj.constructor = Employee;
    obj.name = name;
    obj.role = role;
    return obj;
}
Employee.sharedFunctionality = {};
Employee.sharedFunctionality.greet = function (){
    console.log(`Hi ${this.name}`);
}
let bob = Employee("Bob", "CFO");
console.log(bob.name);
bob.greet();
let j = {};
console.log(j.prototype);
//console.log(bob instanceof Employee);
console.log(bob.constructor.sharedFunctionality === Employee.sharedFunctionality);


var mitch = {
    first: "Mitch",
    last: "McCabe",
    hasPartners: true,
    accreditation: "CPA",
}

mitch.first = "mac";

function rich (person){
    if(person.hasPartners && person.accreditation){
        return true;
    }
    return false;
}

console.log(rich(mitch));

/**
* @class Emergence Employee
* @param {string} first
* @param {string} last
* @param {boolean} hasPartners
* @param {string} accreditation
* @author Mac Allen
*/
function EmergenceEmployee(first, last, hasPartners, accreditation){
    this.first = first;
    this.last = last;
    this.hasPartners = hasPartners;
    this.accreditation = accreditation;
    this.fullName = first + " " + last;
    this.willBeRich = function (){
        if (this.hasPartners && this.accreditation) {
            return true;
        }
        return false;
    }
}




let cfoBeautyMitch = EmergenceEmployee("Mitch", "McCabe", true, "CPA");
let ctoMyles = new EmergenceEmployee()
console.log(`This employee will be rich: ${cfoBeautyMitch.willBeRich()} cool stuff`);






