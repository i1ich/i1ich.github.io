document.addEventListener('DOMContentLoaded', function() {
    const lsButton = document.getElementById('lsButton');
    const resultDiv = document.getElementById('result');

    lsButton.addEventListener('click', async function() {
        try {
            const response = await fetch('/ls');
            const data = await response.json();
            resultDiv.textContent = data.result;
        } catch (error) {
            console.error('Error:', error);
            resultDiv.textContent = 'An error occurred';
        }
    });
});