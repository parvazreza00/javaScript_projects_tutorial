const person = {
    first_name: "John",
    last_name: "Doe",
    age: 28,
    eyeColor: "blue",
    education: {
        ssc: {
            passingYear: 2012,
            group: "Science",
            result: "A+",
            edu_board: "Barisal",
        },
        hsc: {
            passingYear: 2014,
            group: "Science",
            result: "A+",
            edu_board: "Barisal",
        },
        BSC: {
            passingYear: 2020,
            university: "Uttara University",
            group: "Computer",
            result: "First class First",
            edu_board: "Dhaka",
        },
        MSC: {
            passingYear: 2025,
            university: "AIUB University",
            group: "MSC in Computer",
            result: "First class First",
            edu_board: "Dhaka",
        },
    }
};

console.log(person.education.ssc);




