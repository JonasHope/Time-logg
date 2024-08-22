
document.addEventListener('DOMContentLoaded', function() {
    const logForm = document.getElementById('logForm');
    const logInput = document.getElementById('logInput');
    const logList = document.getElementById('logList');
    const clearLogsButton = document.getElementById('clearLogs');

   
    const loadLogs = () => {
        const logs = JSON.parse(localStorage.getItem('logs')) || [];
        logList.innerHTML = '';
        logs.forEach(log => {
            const logItem = document.createElement('div');
            logItem.className = 'log-item';
            logItem.textContent = log;
            logList.appendChild(logItem);
        });
    };


    const saveLog = (log) => {
        const logs = JSON.parse(localStorage.getItem('logs')) || [];
        logs.push(log);
        localStorage.setItem('logs', JSON.stringify(logs));
    };


    logForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const log = logInput.value.trim();
        if (log) {
            saveLog(log);
            loadLogs();
            logInput.value = '';
        }
    });


    clearLogsButton.addEventListener('click', function() {
        localStorage.removeItem('logs');
        loadLogs();
    });


    loadLogs();
});
