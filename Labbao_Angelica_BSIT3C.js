let studentName = "Ange";
let studentAge = 20;
let studentCourse = "InfoTech";
let studentSection = "BSIT-3C";
let studentScore = 85;
let schoolName = "NorthWest Samar State University";
let city = "Calbayog";
let yearLevel = 3;
let favoriteSubject = "Filipino";
let status = "Regular";

const passingScore = 75;
const teacherName = "Mr. Cruz";
const subject1 = "JavaScript";
const subject2 = "Math";
const subject3 = "Filipino";
const room = "Room 301";
const semester = "1st Semester";
const schoolYear = "2026-2027";
const studentID = "BSIT001";
const department = "CCIS";

const students = ["Ange", "Viv", "Jely", "Lica"];
const scores = [85, 70, 90, 78];
const subjects = ["Filipino", "Math", "English"];

const schoolInfo = {
    name: "NorthWest Samar State University",
    city: "Calbayog"
};

const courseInfo = {
    course: "BSIT",
    year: 3
};

const contactInfo = {
    email: "ange@email.com",
    phone: "09123456789"
};

const [firstStudent, secondStudent, thirdStudent] = students;

const [firstScore, secondScore, thirdScore] = scores;

const [firstSubject, secondSubject, thirdSubject] = subjects;

const { name: school, city: schoolCity } = schoolInfo;

const { course, year } = courseInfo;

const { email, phone } = contactInfo;

const moreStudents = [...students, "Peter"];

const moreScores = [...scores, 95];

const newSchoolInfo = {
    ...schoolInfo,
    country: "Philippines"
};

const newCourseInfo = {
    ...courseInfo,
    section: "BSIT-3C"
};

const getName = () => studentName;

const getScore = () => studentScore;

const getCourse = () => studentCourse;

const addNumbers = (a, b) => a + b;

const greetStudent = name => `Hello, ${name}!`;

const passedStudents = students.map((name, index) => {
    return `${name}: ${scores[index]}`;
});

const doubleScores = scores.map(score => score * 2);

const highScores = scores.filter(score => score >= 80);

const passedNames = students.filter((name, index) => scores[index] >= passingScore);

const studentDetails = {
    name: studentName,
    course: studentCourse,
    contact: {
        email: email
    }
};

const teacherDetails = {
    name: teacherName,
    subject: subject1,
    contact: {
        email: "teacher@email.com"
    }
};

console.log(`Student Name: ${studentName}`);
console.log(`Age: ${studentAge}`);
console.log(`Course: ${studentCourse}`);
console.log(`Section: ${studentSection}`);
console.log(`Score: ${studentScore}`);
console.log(`School: ${schoolName}`);
console.log(`City: ${city}`);
console.log(`Year Level: ${yearLevel}`);
console.log(`Favorite Subject: ${favoriteSubject}`);
console.log(`Status: ${status}`);

console.log(`First Student: ${firstStudent}`);
console.log(`Second Student: ${secondStudent}`);
console.log(`Third Student: ${thirdStudent}`);

console.log(`First Score: ${firstScore}`);
console.log(`Second Score: ${secondScore}`);
console.log(`Third Score: ${thirdScore}`);

console.log(`First Subject: ${firstSubject}`);
console.log(`Second Subject: ${secondSubject}`);
console.log(`Third Subject: ${thirdSubject}`);

console.log(`School: ${school}`);
console.log(`School City: ${schoolCity}`);
console.log(`Course: ${course}`);
console.log(`Year: ${year}`);

console.log(`Email: ${email}`);
console.log(`Phone: ${phone}`);

console.log(`More Students: ${moreStudents}`);
console.log(`More Scores: ${moreScores}`);

console.log(`New School: ${newSchoolInfo.name}`);
console.log(`Country: ${newSchoolInfo.country}`);

console.log(`New Course: ${newCourseInfo.course}`);
console.log(`Section: ${newCourseInfo.section}`);

console.log(getName());
console.log(getScore());
console.log(getCourse());
console.log(`5 + 5 = ${addNumbers(5, 5)}`);
console.log(greetStudent(studentName));

console.log(`Student Scores: ${passedStudents}`);
console.log(`Double Scores: ${doubleScores}`);

console.log(`High Scores: ${highScores}`);
console.log(`Passed Students: ${passedNames}`);

console.log(`Student Email: ${studentDetails.contact?.email}`);
console.log(`Teacher Email: ${teacherDetails.contact?.email}`);
