const apiBaseUrl = "http://localhost:3010/api/";
const apiAverageBaseUrl = "http://localhost:3011/api/";

document.addEventListener("DOMContentLoaded", function () {
    fetch(`${apiBaseUrl}students`)
        .then(response => response.json())
        .then(students => {
            const studentList = document.getElementById("student-list");
            students.forEach(student => {
                const li = document.createElement("li");
                const img = document.createElement("img");
                img.src = student.image;
                img.alt = `Photo de ${student.firstname} ${student.lastname}`;
                
                const a = document.createElement("a");
                a.textContent = `${student.firstname} ${student.lastname}`;
                a.href = "#";
                a.onclick = () => loadStudentDetails(student.id);
                
                li.appendChild(img);
                li.appendChild(a);
                studentList.appendChild(li);
            });
        })
        .catch(error => console.error("Erreur lors du chargement des étudiants:", error));
});

function loadStudentDetails(id) {
    fetch(`${apiBaseUrl}student/${id}`)
        .then(response => response.json())
        .then(student => {
            document.getElementById("student-name").textContent = `${student.firstname} ${student.lastname}`;
            document.getElementById("student-image").src = student.image;
            document.getElementById("student-age").textContent = student.age;
            document.getElementById("student-location").textContent = student.location;
            document.getElementById("student-list").classList.add("hidden");
            document.getElementById("student-details").classList.remove("hidden");
            fetch(`${apiAverageBaseUrl}grades/student/${id}/average`)
            .then(response => response.json())
            .then(
                average => {
                    const a = document.getElementById("student-average-link");
                    a.textContent = average.toLocaleString('fr-fr',{maximumFractionDigits:2}) + "/20";
                    a.onclick = () => showGrades(student.id);
                }
            );
        })
        .catch(error => console.error("Erreur lors du chargement des détails de l'étudiant:", error));
}
function showGrades(id) {
    fetch(`${apiAverageBaseUrl}grades/student/${id}`)
    .then(response => response.json())
    .then(
        grades => {
            const gradesTable = document.getElementById("grades-table");
            const gradesBody = document.getElementById("grades-body");
            gradesBody.innerHTML = "";
            grades.forEach(grade => {
                const row = `<tr><td>${grade.subject}</td><td>${grade.value.toLocaleString('fr-fr',{maximumFractionDigits:2})}/20</td><td>${grade.teacher}</td></tr>`;
                gradesBody.innerHTML += row;
            });
        
            gradesTable.classList.toggle("hidden");
           
        }
    );
}
function goBack() {
    document.getElementById("student-list").classList.remove("hidden");
    document.getElementById("student-details").classList.add("hidden");
    document.getElementById("grades-body").innerHTML = "";
    document.getElementById("grades-table").classList.add("hidden");
}
