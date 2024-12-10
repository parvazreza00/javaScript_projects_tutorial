class Person {
    constructor(firstName, lastName, mobile, data_of_birth, yearly_income){
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
        this.data_of_birth = new Date(data_of_birth);
        this.yearly_income = yearly_income;
    }

    getFullName = () => {
        return this.firstName + " " + this.lastName;
    }

    getAge = () => {
        const diff = Date.now() - this.data_of_birth.getTime();
        const age = new Date(diff);
        return age.getUTCFullYear() - 1970;
    }

    getTaxAmount = () =>{
        let taxamount = 0;
        if(this.yearly_income > 300000){
            taxamount = this.yearly_income * 0.10;
        }else if(this.yearly_income > 400000 && this.yearly_income < 500000){
            taxamount = this.yearly_income * 0.15;
        }else if(this.yearly_income > 500000){
            taxamount = this.yearly_income * 0.20;
        }else{
            taxamount = 0;
        }
        return taxamount;
    }
}

const personObj = new Person('Khan',"shaeb","875454945","1996-03-29",470000);
console.log(personObj.getFullName(), personObj.getAge(), personObj.getTaxAmount());