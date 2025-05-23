let grades = [
    { id: 1, studentId: 1, studentName: "رزان أحمد شحادة حسن", subject: "برمجة 2", homework: 19, mid: 32, finalExam: 42 },
    { id: 2, studentId: 2, studentName: "داليا أحمد عبدالكريم عمر", subject: "برمجة 2", homework: 18, mid: 28, finalExam: 44 },
    { id: 3, studentId: 3, studentName: "عيد أيمن محمد سماره", subject: "برمجة 2", homework: 17, mid: 30, finalExam: 40 },
    { id: 4, studentId: 4, studentName: "عادل جعفر احمد عوض الله", subject: "برمجة 2", homework: 20, mid: 35, finalExam: 40 },
    { id: 5, studentId: 5, studentName: "محمد جواد فضل ريان", subject: "برمجة 2", homework: 16, mid: 26, finalExam: 43 },
    { id: 6, studentId: 6, studentName: "محمد جواد محمود خواجا", subject: "برمجة 2", homework: 18, mid: 27, finalExam: 41 },
    { id: 7, studentId: 7, studentName: "محمود حمزه محمود عبد القادر", subject: "برمجة 2", homework: 19, mid: 32, finalExam: 38 },
    { id: 8, studentId: 8, studentName: "ديما حيدر كمال حمادة", subject: "برمجة 2", homework: 15, mid: 24, finalExam: 37 },
    { id: 9, studentId: 9, studentName: "بيان راكز ابراهيم اعرار", subject: "برمجة 2", homework: 16, mid: 31, finalExam: 44 },
    { id: 10, studentId: 10, studentName: "محمود رشيد سعد علان", subject: "برمجة 2", homework: 20, mid: 35, finalExam: 42 },
    { id: 11, studentId: 11, studentName: "عمرو سائد عصام بركات", subject: "برمجة 2", homework: 19, mid: 34, finalExam: 41 },
    { id: 12, studentId: 12, studentName: "تقى سامر صبحي دار بدر", subject: "برمجة 2", homework: 18, mid: 29, finalExam: 38 },
    { id: 13, studentId: 13, studentName: "عز الدين سعيد محمد اجرب", subject: "برمجة 2", homework: 20, mid: 30, finalExam: 44 },
    { id: 14, studentId: 14, studentName: "سديل سعيد محمد معروف", subject: "برمجة 2", homework: 16, mid: 25, finalExam: 41 },
    { id: 15, studentId: 15, studentName: "رجاء سلطان حميدان سليم", subject: "برمجة 2", homework: 17, mid: 27, finalExam: 36 },
    { id: 16, studentId: 16, studentName: "بيلسان سهيل طلال خليل", subject: "برمجة 2", homework: 18, mid: 35, finalExam: 39 },
    { id: 17, studentId: 17, studentName: "وعد عبد الغني خميس سعد", subject: "برمجة 2", homework: 19, mid: 34, finalExam: 44 },
    { id: 18, studentId: 18, studentName: "ادهم عماد كامل غنمة", subject: "برمجة 2", homework: 20, mid: 33, finalExam: 41 },
    { id: 19, studentId: 19, studentName: "مصعب عماد ياسين ابو شربك", subject: "برمجة 2", homework: 17, mid: 28, finalExam: 38 },
    { id: 20, studentId: 20, studentName: "محمد عمر محمد عبد القادر", subject: "برمجة 2", homework: 18, mid: 29, finalExam: 42 },
    { id: 21, studentId: 21, studentName: "أيهم عنتر يوسف دريدي", subject: "برمجة 2", homework: 15, mid: 26, finalExam: 35 },
    { id: 22, studentId: 22, studentName: "محمد فؤاد حسن علي", subject: "برمجة 2", homework: 20, mid: 34, finalExam: 45 },
    { id: 23, studentId: 23, studentName: "علي فراس احمد ابوعلي", subject: "برمجة 2", homework: 18, mid: 32, finalExam: 39 },
    { id: 24, studentId: 24, studentName: "عبد الكريم فراس عبد الكريم عطياني", subject: "برمجة 2", homework: 19, mid: 33, finalExam: 44 },
    { id: 25, studentId: 25, studentName: "عمار لؤي محمد مفيد الفاخوري", subject: "برمجة 2", homework: 20, mid: 35, finalExam: 40 },
    { id: 26, studentId: 26, studentName: "عمر محمد احمد الخطيب", subject: "برمجة 2", homework: 17, mid: 25, finalExam: 42 },
    { id: 27, studentId: 27, studentName: "مالك محمد جميل نجار", subject: "برمجة 2", homework: 18, mid: 34, finalExam: 39 },
    { id: 28, studentId: 28, studentName: "دانا محمد حسن برغوثي", subject: "برمجة 2", homework: 20, mid: 31, finalExam: 40 },
    { id: 29, studentId: 29, studentName: "يزن محمد رافع غنام", subject: "برمجة 2", homework: 19, mid: 33, finalExam: 44 },
    { id: 30, studentId: 30, studentName: "معاذ محمد صبري سايس", subject: "برمجة 2", homework: 16, mid: 29, finalExam: 37 },
    { id: 31, studentId: 31, studentName: "قصي محمد عبد الله رمحي", subject: "برمجة 2", homework: 18, mid: 32, finalExam: 38 },
    { id: 32, studentId: 32, studentName: "ميسرة محمد عبد سالم", subject: "برمجة 2", homework: 15, mid: 27, finalExam: 41 },
    { id: 33, studentId: 33, studentName: "ليان محمد عمر حشاش", subject: "برمجة 2", homework: 17, mid: 26, finalExam: 39 },
    { id: 34, studentId: 34, studentName: "امير معاذ علي ابوسليقة", subject: "برمجة 2", homework: 20, mid: 35, finalExam: 45 },
    { id: 35, studentId: 35, studentName: "احمد نبيل يوسف حبابة", subject: "برمجة 2", homework: 19, mid: 32, finalExam: 43 },
    { id: 36, studentId: 36, studentName: "احمد هيثم موسى دراج", subject: "برمجة 2", homework: 18, mid: 30, finalExam: 40 },
    { id: 37, studentId: 37, studentName: "خالد وائل ابراهيم العزه", subject: "برمجة 2", homework: 16, mid: 29, finalExam: 38 },
    { id: 38, studentId: 38, studentName: "محمود حمزه محمود عبد القادر", subject: "برمجة 2", homework: 17, mid: 28, finalExam: 44 }
];


let searchValue = "";
let currentTab = "final"; // النهائية افتراضي

function renderGrades() {
    const tbody = document.getElementById('grades-body');
    tbody.innerHTML = '';
    grades
        .filter(g => g.studentName.includes(searchValue) || String(g.studentId).includes(searchValue))
        .forEach(g => {
            let displayScore;
            switch (currentTab) {
                case 'homework': displayScore = g.homework; break;
                case 'mid': displayScore = g.mid; break;
                case 'finalExam': displayScore = g.finalExam; break;
                default: // النهائية
                    displayScore = g.homework + g.mid + g.finalExam;
            }
            let header = "";
            switch (currentTab) {
                case 'homework': header = "علامة الواجبات (من 20)"; break;
                case 'mid': header = "علامة الميد (من 35)"; break;
                case 'finalExam': header = "علامة الفاينل (من 45)"; break;
                default: header = "العلامة النهائية (من 100)";
            }
            document.getElementById('score-header').innerText = header;
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${g.studentId}</td>
                <td>${g.studentName}</td>
                <td>${g.subject}</td>
                <td id="score-${g.id}">${displayScore}</td>
                <td>
                    <div class="action-btns">
                        <button class="edit-btn" onclick="editGrade(${g.id})">تعديل</button>
                        <button class="delete-btn" onclick="deleteGrade(${g.id})">حذف</button>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        });
}

function searchStudent() {
    searchValue = document.getElementById('search').value.trim();
    renderGrades();
}

function switchTab(tab) {
    currentTab = tab;
    // غير التفعيل للأزرار
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if(tab === "final") document.querySelectorAll('.tab-btn')[0].classList.add('active');
    if(tab === "homework") document.querySelectorAll('.tab-btn')[1].classList.add('active');
    if(tab === "mid") document.querySelectorAll('.tab-btn')[2].classList.add('active');
    if(tab === "finalExam") document.querySelectorAll('.tab-btn')[3].classList.add('active');
    renderGrades();
}

function deleteGrade(id) {
    grades = grades.filter(g => g.id !== id);
    renderGrades();
}

function editGrade(id) {
    const g = grades.find(x => x.id === id);
    if (!g) return;
    let value = "";
    let min = 0, max = 100;
    switch (currentTab) {
        case 'homework': value = g.homework; min = 0; max = 20; break;
        case 'mid': value = g.mid; min = 0; max = 35; break;
        case 'finalExam': value = g.finalExam; min = 0; max = 45; break;
        default: value = g.homework + g.mid + g.finalExam; min = 0; max = 100;
    }
    const td = document.getElementById(`score-${id}`);
    td.innerHTML = `
        <input id="edit-input-${id}" type="number" min="${min}" max="${max}" value="${value}" style="width:65px;text-align:center;border:1.2px solid #b621fe;border-radius:6px;">
        <button class="save-btn" style="background:#1fd1f9;margin-right:6px;padding:3px 14px;border:none;border-radius:7px;font-size:14px;color:#fff;font-weight:bold;cursor:pointer" onclick="saveGrade(${id},${min},${max})">✔</button>
    `;
}
function saveGrade(id, min, max) {
    const input = document.getElementById(`edit-input-${id}`);
    if (!input) return;
    let val = Number(input.value);
    if (isNaN(val) || val < min || val > max) {
        alert(`يجب إدخال علامة بين ${min} و ${max}`);
        return;
    }
    grades = grades.map(g => {
        if (g.id === id) {
            switch (currentTab) {
                case 'homework': return { ...g, homework: val };
                case 'mid': return { ...g, mid: val };
                case 'finalExam': return { ...g, finalExam: val };
                default: return g;
            }
        }
        return g;
    });
    renderGrades();
}

function openAddModal() {
    document.getElementById('addModal').style.display = 'flex';
}
function closeAddModal() {
    document.getElementById('addModal').style.display = 'none';
}
function addGrade() {
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    const homework = Number(document.getElementById('homework').value);
    const mid = Number(document.getElementById('mid').value);
    const finalExam = Number(document.getElementById('finalExam').value);
    if (!studentId || !studentName || isNaN(homework) || isNaN(mid) || isNaN(finalExam)) return;
    grades.push({
        id: grades.length ? grades[grades.length-1].id + 1 : 1,
        studentId,
        studentName,
        subject: "برمجة 2",
        homework,
        mid,
        finalExam
    });
    closeAddModal();
    renderGrades();
}

function goBack() {
    window.location.href = 'dashboard.html';
}

setInterval(() => {
    const clock = document.getElementById('clock');
    if(clock) {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString('ar-EG');
    }
}, 1000);

window.onload = renderGrades;
