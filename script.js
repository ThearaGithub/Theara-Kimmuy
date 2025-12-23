// Love Days Counter Logic
function getDaysSince(dateString) {
    const startDate = new Date(dateString);
    const today = new Date();
    // Zero out time for accurate day count
    startDate.setHours(0,0,0,0);
    today.setHours(0,0,0,0);
    const diff = today - startDate;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function updateCounter() {
    const loveDate = localStorage.getItem('loveDate');
    if (loveDate) {
        document.getElementById('loveDate').value = loveDate;
        const days = getDaysSince(loveDate);
        document.getElementById('daysCount').textContent = days;
    } else {
        document.getElementById('daysCount').textContent = 0;
    }
}

function setLoveDate() {
    const date = document.getElementById('loveDate').value;
    if (date) {
        localStorage.setItem('loveDate', date);
        updateCounter();
    }
}

window.onload = function() {
    // Set default date if not set
    if (!localStorage.getItem('loveDate')) {
        localStorage.setItem('loveDate', '2025-11-29');
    }
    updateCounter();
};
