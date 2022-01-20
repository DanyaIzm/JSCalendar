const monthsString = {
  0: "Январь",
  1: "Февраль",
  2: "Март",
  3: "Апрель",
  4: "Май",
  5: "Июнь",
  6: "Июль",
  7: "Август",
  8: "Сентябрь",
  9: "Октябрь",
  10: "Ноябрь",
  11: "Декабрь",
};

const monthTitle = document.querySelector(".month");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const days = document.querySelectorAll(".day");

const currentDate = new Date();

arrowLeft.addEventListener("click", () => {
  changeMonth(-1);
});

arrowRight.addEventListener("click", () => {
  changeMonth(1);
});

function clearCalendar() {
  days.forEach((day) => {
    if (!day.classList.contains("day-transparent")) {
      day.classList.add("day-transparent");
    }
    day.classList.remove("day-active");
    day.innerHTML = "";
  });
}

function renderCalendar() {
  const datePointer = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  monthTitle.innerHTML = `${
    monthsString[datePointer.getMonth()]
  } ${datePointer.getFullYear()}`;

  let dayToStart = datePointer.getDay() - 1;
  if (dayToStart < 0) {
    dayToStart = 6;
  }

  for (let i = 0; i < 42; i++) {
    if (i < dayToStart) {
      continue;
    }
    days[i].classList.remove("day-transparent");
    days[i].innerHTML = datePointer.getDate();

    const realDate = new Date();
    if (
      realDate.getDate() == datePointer.getDate() &&
      realDate.getMonth() == datePointer.getMonth() &&
      realDate.getFullYear() == datePointer.getFullYear()
    ) {
      days[i].classList.add("day-active");
    }

    datePointer.setDate(datePointer.getDate() + 1);

    if (datePointer.getMonth() != currentDate.getMonth()) {
      break;
    }
  }

  seasonCustomization();
}

function seasonCustomization() {
  // season customisation
  monthTitle.className = "month";
  arrowLeft.querySelector("img").setAttribute("src", "pics/arrow-winter.png");
  arrowRight.querySelector("img").setAttribute("src", "pics/arrow-winter.png");
  document.querySelector(".main").className = "main";
  days.forEach((day) => {
    if (
      !day.classList.contains("day-transparent") &&
      !day.classList.contains("day-active")
    ) {
      day.className = "day";
    }
  });
  if (document.querySelector(".day-active")) {
    document.querySelector(".day-active").className = "day day-active";
  }

  if (currentDate.getMonth() >= 2 && currentDate.getMonth() <= 4) {
    // Весна
    monthTitle.classList.add("month-spring");
    arrowLeft.querySelector("img").setAttribute("src", "pics/arrow-spring.png");
    arrowRight
      .querySelector("img")
      .setAttribute("src", "pics/arrow-spring.png");
    document.querySelector(".main").classList.add("main-spring");
    days.forEach((day) => {
      if (
        !day.classList.contains("day-transparent") &&
        !day.classList.contains("day-active")
      ) {
        day.classList.add("day-spring");
      }
    });
    if (document.querySelector(".day-active")) {
      document.querySelector(".day-active").classList.add("day-active-spring");
    }
  } else if (currentDate.getMonth() >= 5 && currentDate.getMonth() <= 7) {
    // Лето
    monthTitle.classList.add("month-summer");
    arrowLeft.querySelector("img").setAttribute("src", "pics/arrow-summer.png");
    arrowRight
      .querySelector("img")
      .setAttribute("src", "pics/arrow-summer.png");
    document.querySelector(".main").classList.add("main-summer");
    days.forEach((day) => {
      if (
        !day.classList.contains("day-transparent") &&
        !day.classList.contains("day-active")
      ) {
        day.classList.add("day-summer");
      }
    });
    if (document.querySelector(".day-active")) {
      document.querySelector(".day-active").classList.add("day-active-summer");
    }
  } else if (currentDate.getMonth() >= 8 && currentDate.getMonth() <= 10) {
    // Осень
    monthTitle.classList.add("month-fall");
    arrowLeft.querySelector("img").setAttribute("src", "pics/arrow-fall.png");
    arrowRight.querySelector("img").setAttribute("src", "pics/arrow-fall.png");
    document.querySelector(".main").classList.add("main-fall");
    days.forEach((day) => {
      if (
        !day.classList.contains("day-transparent") &&
        !day.classList.contains("day-active")
      ) {
        day.classList.add("day-fall");
      }
    });
    if (document.querySelector(".day-active")) {
      document.querySelector(".day-active").classList.add("day-active-fall");
    }
  }
}

function changeMonth(offset) {
  currentDate.setMonth(currentDate.getMonth() + offset);
  clearCalendar();
  renderCalendar();
}

renderCalendar();
