document.addEventListener('DOMContentLoaded', function () {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "index.html";
        return;
    }

    // جلب بيانات المستخدم
    fetch("http://localhost:8080/api/user/info", {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
        .then(res => {
            if (!res.ok) throw new Error("Unauthorized");
            return res.json();
        })
        .then(data => {
            const welcomeEl = document.querySelector('.welcome');
            const hour = new Date().getHours();
            let greeting = "Good Morning";
            if (hour >= 12) greeting = "Good Afternoon";
            if (hour >= 18) greeting = "Good Evening";

            if (welcomeEl) {
                welcomeEl.textContent = `${greeting}, ${data.username} (${data.role})`;
            }
        })
        .catch(() => {
            alert("Session expired or invalid token. Please login again.");
            localStorage.clear();
            window.location.href = "index.html";
        });

    // عرض الساعة
    function updateClock() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        const clockEl = document.getElementById('clock');
        if (clockEl) {
            clockEl.textContent = `${h}:${m}:${s}`;
        }
    }
    setInterval(updateClock, 1000);
    updateClock();

    // تسجيل الخروج
    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.clear();
            window.location.href = "index.html";
        });
    }

    // الرسم البياني
    const chartEl = document.getElementById('myChart');
    if (chartEl) {
        const ctx = chartEl.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
                datasets: [{
                    label: 'المستخدمون النشطون',
                    data: [500, 600, 750, 900, 1100, 1024],
                    borderColor: '#4361ee',
                    tension: 0.3,
                    fill: true,
                    backgroundColor: 'rgba(67, 97, 238, 0.1)'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                        rtl: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
