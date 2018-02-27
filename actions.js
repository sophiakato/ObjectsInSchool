// LIST--ADD TITLES FOR LIST TABLES
function listItems(){
    var titlesValue = document.getElementById("titles").value;
    if(titlesValue==0){
        listTeachers();
    }
    if(titlesValue==1){
        listStudents();
    }
    if(titlesValue==2){
        listSections();
    }
}

function listTeachers(){
    var html = "<table border = '1'>";
    //FIGURE THIS OUT
    html+="<tr>" + "<td>" +  "First Name" + "</td>" + "<td>" + "Last Name" + "</td>" + "<td>" + "Subject" + "</td>" +"</tr>";
    for(var i = 0; i < allTeachers.length; i++){
        html+= "<tr>";
        html+= "<td>" + allTeachers[i].firstName + "</td>";
        html+= "<td>" + allTeachers[i].lastName + "</td>";
        html+= "<td>" + allTeachers[i].subject + "</td>";
        html+= "</tr>";
    }
    html+= "</table>";

    document.getElementById("listOutput").innerHTML = html;
    document.getElementById("confirmation").innerHTML = "";
}

function listStudents(){
    var html = "<table border = '1'>";
    html+="<tr>" + "<td>" +  "First Name" + "</td>" + "<td>" + "Last Name" + "</td>" + "<td>" + "Grade" + "</td>" +
        "<td>" + "ID Number" + "</td>"+ "</tr>";
    for(var i = 0; i < allStudents.length; i++){
        html+= "<tr>";
        html+= "<td>" + allStudents[i].firstName + "</td>";
        html+= "<td>" + allStudents[i].lastName + "</td>";
        html+= "<td>" + allStudents[i].gradeLevel + "</td>";
        html+= "<td>" + allStudents[i].idNumber + "</td>";
        html+= "</tr>";
    }
    html+= "</table>";

    document.getElementById("listOutput").innerHTML = html;
    document.getElementById("confirmation").innerHTML = "";
}

function listSections() {
    var html = "<table border = '1'>";
    html+="<tr>" + "<td>" +  "Section Name" + "</td>" + "<td>" + "Max Size" + "</td>" + "<td>" + "Current Size" + "</td>" +"</tr>";
    for (var i = 0; i < allSections.length; i++) {
        console.log(allSections[i]);
        html += "<tr>";
        html += "<td>" + allSections[i].name + "</td>";
        html += "<td>" + allSections[i].maxSize + "</td>";
        html += "<td>" + allSections[i].studentList.length + "</td>";
        // html += "<td>" + allSections[i].studentList + "</td>";
        html += "</tr>";
    }
    html += "</table>";

    document.getElementById("listOutput").innerHTML = html;
    document.getElementById("confirmation").innerHTML = "";
}

//BUILD SELECT
function buildSelect(){
    // document.getElementById("goBackButton").style.display = "none";
    // document.getElementById("data").style.display = "none";
    var estud = document.getElementById("selectStudent").innerHTML;
    for(var i = 0; i < allStudents.length; i++){
        estud+= "<option value='" + allStudents[i].id + "'>"+ allStudents[i].firstName + " "+ allStudents[i].lastName + "</option>"
    }
    document.getElementById("selectStudent").innerHTML = estud;
    console.log(allTeachers);
    var teach = document.getElementById("selectTeacher").innerHTML;
    for(var j = 0; j < allTeachers.length; j++){
        teach+= "<option value ='"+ allTeachers[j].id + "'>" + allTeachers[j].firstName + " " + allTeachers[j].lastName + "</option>"
    }
    document.getElementById("selectTeacher").innerHTML = teach;
    // document.getElementById("selectTeacherSection").innerHTML = teach;

    var sect = document.getElementById("selectSection").innerHTML;
    for(var k = 0; k < allSections.length; k++){
        sect+= "<option value ='" + allSections[k].id + "'>" + allSections[k].name + "</option>"
    }
    document.getElementById("selectSection").innerHTML = sect;
    document.getElementById("chooseSection").innerHTML = sect;
}

// ADD
function addStudent(){
    var studentFirst = document.getElementById("studentFirst").value;
    var studentLast = document.getElementById("studentLast").value;
    var gradeLevel = document.getElementById("gradeLevel").value;
    var idNumber = document.getElementById("idNumber").value;
    allStudents.push(new Student(studentFirst, studentLast, gradeLevel, idNumber));
    console.log(allStudents);
    document.getElementById("confirmation").innerHTML = "Student Added";
    clearInput();
    buildSelect();
}

function addTeacher(){
    var teacherFirst = document.getElementById("teacherFirst").value;
    var teacherLast = document.getElementById("teacherLast").value;
    var teacherSubject = document.getElementById("teacherSubject").value;
    allTeachers.push(new Teacher(teacherFirst, teacherLast, teacherSubject));
    document.getElementById("confirmation").innerHTML = "Teacher Added";
    console.log(allTeachers);
    clearInput();
    buildSelect();
}

function addSection(){
    var sectionName = document.getElementById("sectionName").value;
    var maxSize = document.getElementById("maxSize").value;
    allSections.push(new Section(sectionName, maxSize));
    document.getElementById("confirmation").innerHTML = "Section Added";
    clearInput();
    buildSelect();
}

//Look UP
function getSectionById(secId){
    // var secId = Sections.id;
    for(var i = 0; i < allSections.length; i++){
        if(allSections[i].id == secId){
            return allSections[i];
        }
    }
}

function getStudentById(studentId){
    for(var i = 0; i < allStudents.length; i++){
        if(allStudents[i].id ==studentId){
            return allStudents[i];
        }
    }
}

function getTeacherById(teacherId){
    for(var i = 0; i < allTeachers.length; i++){
        if(allTeachers[i].id ==teacherId){
            return allTeachers[i];
        }
    }
}

//Add stuff to section
function addStudentToSection(){
    var stud = getStudentById(document.getElementById("selectStudent").value);
    var sec = getSectionById(document.getElementById("selectSection").value);
    sec.studentList.push(stud);
    for(var i = 0; i < allSections.length; i++){
        if(allSections[i].studentList.length==allSections[i].maxSize){
            document.getElementById("maxWarning").innerHTML = "Class Max Size Reached";
        }
        if(allSections[i].studentList.length>allSections[i].maxSize){
            document.getElementById("maxWarning").innerHTML = "Class Max Size Exceeded";
        }
    }
    document.getElementById("confirmation").innerHTML = "Student Added to Section";

}

function addTeacherToSection(){
    var profesor = getTeacherById(document.getElementById("selectTeacher").value);
    var sec = getSectionById(document.getElementById("chooseSection").value);
    sec.teacherSection.push(profesor);
    console.log(sec);
    document.getElementById("confirmation").innerHTML = "Teacher Added to Section";
}

function clearInput() {
    var elements = document.getElementsByTagName("input");
    for (var i=0; i<elements.length; i++) {
        if (elements[i].type == "text") {
            elements[i].value = "";
        }
        if(elements[i].type=="number"){
            elements[i].value="";
        }
    }
}

