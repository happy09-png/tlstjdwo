let count = 0;

const counterBtn = document.getElementById('counter');
const countNumber = document.getElementById('count_number');

counterBtn.addEventListener('click', () => {
    count++;
    countNumber.textContent = `${count}층`;
});

//로그인
const loginForm = document.querySelector("#loginForm");
loginForm.onsubmit = function (e) {
  e.preventDefault(); // 페이지 새로고침 방지

  const inputId = document.querySelector("#user_Id").value;
  const inputPw = document.querySelector("#user_Pw").value;

  if (inputId === id && inputPw === pw) {
    alert("로그인 성공!");
  } else {
    alert("로그인 실패: 아이디 또는 비밀번호가 틀렸습니다.");
  }
};

//색 바꾸기
let text_message = document.querySelector('#text_message');
  text_message.onclick = function () {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    text_message.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
  };
