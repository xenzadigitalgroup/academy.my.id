document.addEventListener('DOMContentLoaded', function () {
    let joinCount = 5000;
    let joinCountElement = document.getElementById('joinCount');
    let progressBar = document.getElementById('progressBar');
    let percentageText = document.getElementById('percentageText');

    let indoMalayPercentage = {
        indo: 0,
        malay: 0
    };

    function updateJoinCount() {
        indoMalayPercentage.indo = Math.floor(Math.random() * (90 - 20 + 1) + 20);
        indoMalayPercentage.malay = Math.floor(Math.random() * (90 - 20 + 1) + 20);

        joinCountElement.textContent = joinCount + '+';

        // Update progress bar
        progressBar.style.width = `${indoMalayPercentage.indo}%`;
        percentageText.textContent = `${indoMalayPercentage.indo}% Indo, ${indoMalayPercentage.malay}% Malay`;
    }

    setInterval(updateJoinCount, 5000);

    updateJoinCount();
});
document.addEventListener('DOMContentLoaded', function () {
    let joinCount = 5000;
    let joinCountElement = document.getElementById('joinCount');
    let progressBar = document.getElementById('progressBar');
    let percentageText = document.getElementById('percentageText');

    let indoMalayPercentage = {
        indo: 0,
        malay: 0
    };

    function updateJoinCount() {
        indoMalayPercentage.indo = Math.floor(Math.random() * (90 - 20 + 1) + 20);
        indoMalayPercentage.malay = Math.floor(Math.random() * (90 - 20 + 1) + 20);

        joinCountElement.textContent = joinCount + '+';

        progressBar.style.width = `${indoMalayPercentage.indo}%`;
        percentageText.textContent = `${indoMalayPercentage.indo}% Indo, ${indoMalayPercentage.malay}% Malay`;

        // Update status pengajar
        updateTeacherStatus('Andi');
        updateTeacherStatus('Nina');
        updateTeacherStatus('Hadi');
        updateTeacherStatus('Firja');
    }

    function updateTeacherStatus(teacherName) {
        let statusElement = document.getElementById(`status${teacherName}`);
        let isOnline = Math.random() < 0.5; // Misalnya, setengah waktu online setengahnya offline

        statusElement.textContent = isOnline ? 'Online' : 'Off';
        statusElement.className = isOnline ? 'online' : 'offline';
    }

    setInterval(updateJoinCount, 7000);

    updateJoinCount();
});
