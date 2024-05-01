//task20.js
// todo: Задана форма пользовательского профиля. 
// Поля: Имя, фамилия, возраст, образование, биография.
// Релизовать логику сохранения формы через sessionStorage.
// При перезагрузки страницы, данные введенные пользователем
// должны сохраняться. При нажатии на кнопку очистить, форма
// очищается.


const form = document.getElementById("profile-form");

// Сохранение данных формы в sessionStorage
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  // Преобразование FormData в объект
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  // Сохранение объекта в sessionStorage
  sessionStorage.setItem("profileData", JSON.stringify(data));

  alert("Данные профиля сохранены");
});

// Восстановление данных формы из sessionStorage
window.onload = () => {
  const profileData = JSON.parse(sessionStorage.getItem("profileData"));

  if (profileData) {
    for (const key in profileData) {
      const input = document.getElementById(key);
      if (input) {
        input.value = profileData[key];
      }
    }
  }
};

// Очистка формы
form.addEventListener("reset", () => {
  sessionStorage.removeItem("profileData");
  alert("Форма очищена");
});
