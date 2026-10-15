let count = 0;

const counterBtn = document.getElementById('counter');
const countNumber = document.getElementById('count_number');

counterBtn.addEventListener('click', () => {
    count++;
    countNumber.textContent = `${count}층`;
});
