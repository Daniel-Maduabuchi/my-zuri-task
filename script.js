function updateDayAndTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const time = currentDate.toUTCString().split(' ')[4];

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${dayOfWeek}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${time}`;
}

updateDayAndTime();
