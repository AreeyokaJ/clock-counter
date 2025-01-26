import ClockCounter from './ClockCounter.js';

const display = document.getElementById("display");
// const twentyFourHrBtn = document.getElementById("24HrBtn");
const twelveHrBtn = document.getElementById("12HrBtn");

const counter = new ClockCounter(display, twelveHrBtn);

document.getElementById("hrIncr").addEventListener("click", () => counter.incrementHours());
document.getElementById("hrDecr").addEventListener("click", () => counter.decrementHours());
document.getElementById("minIncr").addEventListener("click", () => counter.incrementMinutes());
document.getElementById("minDecr").addEventListener("click", () => counter.decrementMinutes());
document.getElementById("secIncr").addEventListener("click", () => counter.incrementSeconds());
document.getElementById("secDecr").addEventListener("click", () => counter.decrementSeconds());
document.getElementById("12HrBtn").addEventListener("click", () => counter.updateDisplay());
