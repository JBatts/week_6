let vehicles = [
    {
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        color: "Red",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"),
        capacity: 3
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"),
        capacity: 6
    },
    {
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"),
        capacity: 5
    },
    {
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("5-30-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA",
        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    }
];

function findCarByColor(c) {
    vehicles.filter(v => v.color === c).forEach(v =>
        console.log(`The ${v.type} with a license # of ${v.licenseNo} is a ${c} car`));
}

function findExpiredReg(date) {
    vehicles.filter(v => v.registrationExpires > date).forEach(v =>
        console.log(`The ${v.type} with a license # of ${v.licenseNo} registrations has expired on ${v.registrationExpires}`)
    )
}

function findBigVehicle(numOfPpl) {
    vehicles.filter(v => v.capacity >= numOfPpl).forEach(v =>
        console.log(`The ${v.type} with a license # of ${v.licenseNo} can hold atleast ${v.capacity} people`));
}

function findByLicense(endsWith) {
    vehicles.filter(v => v.licenseNo.endsWith(endsWith)).forEach(v =>
        console.log(`The ${v.type} with a license # of ${v.licenseNo} ends with "${endsWith}"`));
}

findCarByColor("Red")
findExpiredReg(new Date(2022))
findBigVehicle(6)
findByLicense("222")