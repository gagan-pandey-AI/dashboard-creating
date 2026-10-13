let students = 0;

const count = document.getElementById("count");
const button = document.getElementById("addBtn");

button.addEventListener("click", function() {

```
students = students + 1;

count.textContent = students;
```

});
