// document.getElementById("guessButton").style.display = "none"

var allStudents = [];
var allTeachers = [];
var allSections = [];

allStudents.push(new Student("Joe","Cohn",11,"0000"));
allStudents.push(new Student("Jane","Smith",12, "0001"));
allStudents.push(new Student("Trent","Arrington",10, "0002"));
allStudents.push(new Student("Becky","Powers",9, "0003"));
allStudents.push(new Student("Jen","Ramirez",  12, "0004"));

allTeachers.push(new Teacher("Masha","Albrecht","Math"));
allTeachers.push(new Teacher("Nakia","Baird","Math"));
allTeachers.push(new Teacher("Keldon","Clegg","History"));
allTeachers.push(new Teacher("Matt","Albinson","CS"));
allTeachers.push(new Teacher("Carl","Rogers","English"));

allSections.push(new Section("Math 2", "30"));
allSections.push(new Section("Math 3", "25"));
allSections.push(new Section("US History", "30"));
allSections.push(new Section("CS", "32"));
allSections.push(new Section("English", "30"));