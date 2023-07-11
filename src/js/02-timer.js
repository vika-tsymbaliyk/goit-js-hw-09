import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const daysValue = document.querySelector("span[data-days]");
const hoursValue = document.querySelector("span[data-hours]");
const minutesValue = document.querySelector("span[data-minutes]");
const secondsValue = document.querySelector("span[data-seconds]");
const currentDate = new Date();
let selectedDate = new Date();

btnStart.addEventListener("click", timeCount);

btnStart.disabled = true;

flatpickr(datePicker, {
    enableTime: true,
    // dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: currentDate,
    minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < currentDate) {
      window.alert("Please choose a date in the future");
      
    } else {
      // console.log(selectedDates[0])
      btnStart.disabled = false;
      selectedDate = selectedDates[0]
    }
    },
})

function timeCount() {
  btnStart.disabled = true;
  // dateTimeInput.disabled = true;
  getTime();
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function getTime() {
    timerId = setInterval(() => {
        const delta = selectedDate - Date.now();
        const dataSet = convertMs(delta);
        
        if (delta <= 0) {
             clearInterval(timerId);
        } else {
            showTime(dataSet);
        }
        }, 1000);
}

function showTime(dataSet) {
    daysValue.textContent = addLeadingZero(dataSet.days);
    hoursValue.textContent = addLeadingZero(dataSet.hours);
    minutesValue.textContent = addLeadingZero(dataSet.minutes);
    secondsValue.textContent = addLeadingZero(dataSet.seconds);
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
