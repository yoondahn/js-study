const dday = document.getElementById("d-day");

const SECOND = 1000;
const MINUTE = 1000*60;
const HOUR = 1000*60*60;
const DAY = 1000*60*60*24;

function getDate() {
    const eveDay = new Date("2025-01-01:00:00:00+0900");
    const nowDay = new Date();
    const timeGap = eveDay - nowDay;

    const days = String(Math.floor(timeGap / DAY)).padStart(3, "0");
    const hours = String(Math.floor((timeGap % DAY) / HOUR)).padStart(2, "0");
    const minutes = String(Math.floor((timeGap % HOUR) / MINUTE)).padStart(2, "0");
    const seconds = String(Math.floor((timeGap % MINUTE) / SECOND)).padStart(2, "0");
    dday.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getDate(); // 1초 먼저 호출
setInterval(getDate, 1000);
// setTimeout(getClock, 1000);