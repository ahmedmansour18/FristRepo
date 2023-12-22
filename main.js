function executeCode() {
    const input = document.getElementById('input').value;
    const outputDiv = document.getElementById('output');
    try {
        const output = eval(input);
        outputDiv.textContent = output;
    } catch (error) {
        outputDiv.textContent = 'Error: ' + error.message;
    }
}