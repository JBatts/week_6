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

    function findFamous(numOfFilms) {
        let famous = academyMembers.filter(famousP => famousP.films.length >= numOfFilms);
        if(famous.length > 0){
            famous.forEach(member => {
              console.log(`${member.name} has been in ${member.films.length} films, including: ${member.films.join(", ")}`);  
            });
        } else {
            console.log(`No one has been in that many films`);
        }};

    function findNameStart(nameStartsWith) {
        let coolName = academyMembers.filter(coolName1 => coolName1.name.startsWith(nameStartsWith));
        if(coolName.length > 0){
            coolName.forEach(nameStart => {
                console.log(`Funny you asked ${nameStart.name}'s starts with ${nameStartsWith}`);
            });
        } else {
            console.log(`No one's name starts with ${nameStartsWith}`);
        }};

    function findFilmWith(letter) {
        let filmToFind = academyMembers.filter(member => 
            member.films.some(film => film.includes(letter)));
        
        if(filmToFind.length > 0){
            filmToFind.forEach(f => {
                let filmsWithLetter = f.films.filter(film => film.includes(letter));
                console.log(`Funny you ask, ${f.name} has been in the following films that include "${letter}": ${filmsWithLetter.join(", ")}`);            });
        } else {
            console.log(`No one has been in a film that has a title that includes ${letter}`)
        }};

    findMember(187);
    findFamous(3);
    findNameStart("Bob");
    findFilmWith("A");


