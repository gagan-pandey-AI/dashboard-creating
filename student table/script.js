let students = ["Rahul", "Priya", "Aman", "Gagan"];

const studentList = document.getElementById("studentList");
const input = document.getElementById("studentName");
const button = document.getElementById("addBtn");

// Display student names
function showStudents() {
studentList.replaceChildren();

```
students.forEach(function(name) {
    const li = document.createElement("li");
    li.textContent = name;
    studentList.appendChild(li);
});
```

}

// Add a new student
button.addEventListener("click", function() {
const name = input.value.trim();

```
if (name !== "") {
    students.push(name);
    input.value = "";
    showStudents();
}
```

});

// Show initial students
showStudents();
