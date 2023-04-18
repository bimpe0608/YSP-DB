const yspStaff = [
    {name:"Bimpe", height:"5'11", weight:"58kg", gender:"Female", role:"Frontend/social media", officeRating:10, salaryExpectation: 100000},
    {name:"Tobe", height:"5'8", weight:"75kg", gender:"Male", role:"Frontend dev", officeRating:2, salaryExpectation:30000 },
    {name:"Ore", height:"5'2", weight:"40kg", gender:"Female", role:"Front desk", officeRating:7, salaryExpectation:50000},
    {name:"David", height:"5'11", weight:"70kg", gender:"Male", role:"Media", officeRating:7, salaryExpectation:70000},
    {name:"Mojeed", height:"5'8", weight:"60kg", gender:"Male", role:"Math tutor/Head of operations", officeRating:8.5, salaryExpectation:100000},
    {name:"Deola", height:"5'7", weight:"70kg", gender:"Female", role:"UI/UX", officeRating:9, salaryExpectation:150000},
    {name:"Oluchi", height:"5'11", weight:"78kg", gender:"Female", role:"Head of finance", officeRating:9, salaryExpectation:150000},
    {name:"Owujib", height:"5'11", weight:"80kg", gender:"Male", role:"Fullstack dev", officeRating:10, salaryExpectation:200000},
    {name:"Layi", height:"5'11", weight:"65kg", gender:"Male", role:"Brand designer", officeRating:7.5, salaryExpectation:100000},
    {name:"Deba", height:"6'0", weight:"90kg", gender:"Male", role:"Senior dev", officeRating:10, salaryExpectation:300000},
    {name:"Austin", height:"5'6", weight:"60kg", gender:"Male", role:"Media/Editing", officeRating:7.5, salaryExpectation:70000},
    {name:"Bolaji", height:"5'11", weight:"70kg", gender:"Male", role:"Media/Editing", officeRating:7.5, salaryExpectation:70000},
    {name:"Innocent", height:"6'0", weight:"85kg", gender:"Male", role:"Co-founder/Creative director", officeRating:10, salaryExpectation:500000},
    {name:"Daniel", height:"5'6", weight:"70kg", gender:"Male", role:"CEO", officeRating:10, salaryExpectation:500000}, 
    {name:"Hamzat", height:"5'6.5", weight:"65kg", gender:"Male", role:"Backend", officeRating:5, salaryExpectation:100000},
];

console.log(yspStaff);


// Staff Earning over 100k
const earningsOver100 = yspStaff.filter((data) => {
    return data.salaryExpectation > 100000;
});

console.log(earningsOver100);

// Colleagues with less than 5 rating 
const lessThan5rating = yspStaff.filter((data) => {
    return data.officeRating < 5;
});

console.log(lessThan5rating);

// Array that satisfies the following conditions
const newData = yspStaff.filter((data) => {
    if (data.salaryExpectation > 200000 && data.officeRating > 8 && data.gender === "Male") {
        return data;
    } 
});

console.log(newData);


