document.addEventListener('DOMContentLoaded', () => {
    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

        document.getElementById('timeUTC').textContent = utcTime;
        document.getElementById('dayOfWeek').textContent = dayOfWeek;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
