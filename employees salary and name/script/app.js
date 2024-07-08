document
  .getElementById("employeeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Formni yuborilishini oldini olish

    // Input qiymatlarini olish
    const name = document.getElementById("name").value;
    const salary = document.getElementById("salary").value;

    // Yangi ishchi obyektini yaratish
    const newEmployee = { name: name, salary: salary };

    // Ishchilar ro'yxati arrayini yangilash
    employees.push(newEmployee);

    // Ishchilar ro'yxatini yangilash
    updateEmployeeList();
  });

// Ishchilar arrayini saqlash uchun bo'sh array
const employees = [];

// Ishchilar ro'yxatini HTMLga chiqarish funksiyasi
function updateEmployeeList() {
  const employeeList = document.getElementById("employeeList");
  employeeList.innerHTML = ""; // Eski ro'yxatni tozalash

  // Har bir ishchini ro'yxatda ko'rsatish
  employees.forEach((employee) => {
    const li = document.createElement("li");
    li.textContent = `Ism: ${employee.name}, Maosh: ${employee.salary}`;
    employeeList.appendChild(li);
  });
}

//
document.addEventListener("mousemove", (e) => {
  let body = document.querySelector("body");
  let circle = document.createElement("span");
  let x = e.pageX;
  let y = e.pageY;
  document.querySelector("#cursor").style.left = x + "px";
  document.querySelector("#cursor").style.top = y + "px";
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  let size = Math.random() * Math.floor(Math.random() * (150 - 10 + 1) + 10);
  circle.style.width = 10 + size + "px";
  circle.style.height = 10 + size + "px";
  body.appendChild(circle);
  setTimeout(() => {
    circle.style.opacity = 0;
    setTimeout(() => {
      circle.remove();
    }, 2500);
  }, 2500);
});

document.querySelector("#cursor").setAttribute("data-after", "🧼");
