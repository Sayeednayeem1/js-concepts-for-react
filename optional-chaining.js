
// TODO optional chaining

const player = {
    sakib:{
        village: "kochuket",
        job: "sportsperson",
        status:{
            salary: 200000,
            age: 34
        }
    }
}

const {salary, age} = player?.sakib?.status;

console.log(age);