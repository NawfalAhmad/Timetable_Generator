// RANDOM GRADIENT THEMES
const gradients = [
    "linear-gradient(135deg,#f6d365,#fda085)",
    "linear-gradient(135deg,#a8edea,#fed6e3)",
    "linear-gradient(135deg,#fbc2eb,#a6c1ee)",
    "linear-gradient(135deg,#84fab0,#8fd3f4)",
    "linear-gradient(135deg,#cfd9df,#e2ebf0)",
    "linear-gradient(135deg,#6a11cb,#2575fc)"
];

function applyRandomBackground(){
    const g = gradients[Math.floor(Math.random()*gradients.length)];
    document.body.style.setProperty('--bg', g);
}

// LOADING OVERLAY
function showLoading(){
    const overlay = document.getElementById('overlay');
    overlay.classList.add('show');
    overlay.innerHTML = '<div class="spinner"></div>';
}

// SUBJECT INPUTS DYNAMIC CREATION
function generateSubjectInputs(){
    const num = parseInt(document.getElementById('num_subjects').value || "0");
    const subjectsDiv = document.getElementById('subjects');
    subjectsDiv.innerHTML = "";
    if (num <= 0) return;
    for (let i=0;i<num;i++){
        const label = document.createElement('label');
        label.textContent = `Subject ${i+1}:`;
        const input = document.createElement('input');
        input.type = "text";
        input.name = `subject${i+1}`;
        input.placeholder = `Subject ${i+1}`;
        input.required = true;
        subjectsDiv.appendChild(label);
        subjectsDiv.appendChild(input);
    }
    document.getElementById('generateBtn').style.display = "inline-block";
}

// THEME (DARK/LIGHT) TOGGLE with localStorage
function initThemeToggle(){
    const toggle = document.getElementById('themeToggle');
    // set initial
    const saved = localStorage.getItem('tt_theme');
    if (saved === 'dark') {
        document.body.classList.add('dark');
        toggle.checked = true;
    } else {
        document.body.classList.remove('dark');
        toggle.checked = false;
    }
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.classList.add('dark');
            localStorage.setItem('tt_theme','dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('tt_theme','light');
        }
    });
}

// On load
window.addEventListener('load', () => {
    applyRandomBackground();
    initThemeToggle();
});
