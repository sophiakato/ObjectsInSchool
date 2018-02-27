var id = 1;
var size = 0;
// // You’ll need 3 global arrays to hold allTeachers, allStudents and allSections//
var allTeachers = [];
var allStudents = [];
var allSections = [];
totalStudents = 0;
totalTeachers = 0;
totalSections = 0;

//Student
function Student(studentFirst, studentLast, gradeLevel, idNumber) {
    this.firstName = studentFirst;
    this.lastName = studentLast;
    this.gradeLevel = gradeLevel;
    this.idNumber = idNumber;
    this.id = id++;
}

// Teacher
function Teacher(teacherFirst, teacherLast, teacherSubject){
    this.firstName = teacherFirst;
    this.lastName = teacherLast;
    this.subject = teacherSubject;
    this.id = id++;
}

//Section
function Section(name, maxSize){
    this.teacherSection = [];
    this.name = name;
    this.maxSize = maxSize;
    this.studentList = [];
    this.id = id++;
}













