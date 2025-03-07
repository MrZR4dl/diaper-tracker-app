function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

function logDiaper() {
    const type = document.getElementById("diaper-type").value;
    const intensity = document.getElementById("diaper-intensity").value;
    const timestamp = new Date().toLocaleString();

    let logs = JSON.parse(localStorage.getItem("diaperLogs")) || [];
    logs.push({ type, intensity, timestamp });
    localStorage.setItem("diaperLogs", JSON.stringify(logs));

    alert("Diaper change logged successfully!");
}

function logFluid() {
    const type = document.getElementById("fluid-type").value;
    const amount = document.getElementById("fluid-amount").value;
    const timestamp = new Date().toLocaleString();

    if (!amount) {
        alert("Please enter an amount.");
        return;
    }

    let logs = JSON.parse(localStorage.getItem("fluidLogs")) || [];
    logs.push({ type, amount, timestamp });
    localStorage.setItem("fluidLogs", JSON.stringify(logs));

    alert("Fluid intake logged successfully!");
}