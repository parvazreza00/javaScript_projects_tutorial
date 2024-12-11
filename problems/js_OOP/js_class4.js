class Person {
    constructor(fname,lname,dob,yearly_incom){
        this.fname = fname;
        this.lname = lname;
        this.dob = new Date(dob);
        this.yearly_incom = yearly_incom;
    }

    fullName = () =>{
        return this.fname + " " + this.lname;
    }

    getAge = () =>{
        const diff = Date.now() - this.dob.getTime();
        const age = new Date(diff);
        return age.getUTCFullYear() - 1970;
    }

    getTaxIncome = () =>{
        let taxamount = 0;
        if(this.yearly_incom > 200000){
            return this.yearly_incom * 0.10;
        }else if(this.yearly_incom > 200000 && this.yearly_incom < 400000){
            return this.yearly_incom * 0.15;
        }else if(this.yearly_incom > 400000){
            return this.yearly_incom * 0.20;
        }else{
            taxamount = 0;
        }
        return taxamount;
    }

    getPersonAge = () => {
        const today = new Date();
        const birthDate = this.dob;
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)){
            age--;
        }
        return age;
    }
    

}

const personObj = new Person('parvaz', 'reza','1996-03-29', 380000);
console.log(personObj.fullName(), personObj.getAge(), personObj.getPersonAge(), personObj.getTaxIncome());