let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
    ];

    function findMember(ID) {
        let memberID = academyMembers.filter(memId => memId.memID == ID);
        if(memberID.length > 0){
            console.log(`${memberID[0].memID} is your ID. Hello, ${memberID[0].name}`);
        } else {
            console.log(`That is not a valid ID. Please try again.`);
        };
    };
    findMember(187);


