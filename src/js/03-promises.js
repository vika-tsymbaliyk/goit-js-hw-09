import Notiflix from 'notiflix';

const form = document.querySelector(".form");
const inputDelay = document.querySelector("input[name=delay]");
const inputStep = document.querySelector("input[name=step]");
const inputAmount = document.querySelector("input[name=amount]");

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  let firstDelay = parseInt(inputDelay.value);
  const step = parseInt(inputStep.value);
  const amount = parseInt(inputAmount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        console.log(position);
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    firstDelay += step;
  }
}

function createPromise(position, delay) {
  const promiseMy = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }

    }, delay);
  });
  return promiseMy;
}