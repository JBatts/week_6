let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

function findCourseStart(courseId) {
    let foundCourses = courses.filter(course => course.CourseId === courseId);

    if (foundCourses.length > 0) {
        foundCourses.forEach(course => {
            console.log(`${course.CourseId} starts on ${course.StartDate}`);
    });
    } else {
        console.log("There is no start date sorry!")
    }
}

function findCourseTitle(courseId) {
    let foundCourses = courses.filter(course => course.CourseId == courseId)
    if (foundCourses.length > 0) {
        foundCourses.forEach(course => {
            console.log(`${course.CourseId} is ${course.Title}`);
    });
    } else {
        console.log("There is no start date sorry!")
    }
}

function findCheapCourse(amount) {
    let foundCourses = courses.filter(course => parseFloat(course.Fee) <= amount)
    if (foundCourses.length > 0) {
        foundCourses.forEach(course => {
            console.log(`${course.CourseId} cost ${course.Fee}`);
    });
    } else {
        console.log("There is no start date sorry!")
    }
}

function findClassroom(classroom) {
    let foundCourses = courses.filter(course => course.Location <= classroom)
    if (foundCourses.length > 0) {
        foundCourses.forEach(course => {
            console.log(`${course.CourseId} meet in ${course.Location}`);
    });
    } else {
        console.log("There is no start date sorry!")
    }
}


findCourseStart("PROG200")
findCourseTitle("PROJ500")
findCheapCourse(100)
findClassroom("Classroom 1")