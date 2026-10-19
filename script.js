let count = 0;

const counterBtn = document.getElementById('counter');
const countNumber = document.getElementById('count_number');

counterBtn.addEventListener('click', () => {
    count++;
    countNumber.textContent = `${count}층`;
});

const id = "junamsu";
const pw = "helloworld";

// HTML 요소 가져오기
const userLink = document.querySelector(".user-link");
const loginModal = document.querySelector("#loginModal");
const closeBtn = document.querySelector(".close-btn");
const loginForm = document.querySelector("#loginForm");

// 1. '로그인 하기' 클릭 시 모달 창 띄우기
userLink.addEventListener("click", function (e) {
  e.preventDefault(); // 링크 이동 방지
  loginModal.classList.remove("hidden");
});

// 2. 닫기 버튼(X) 클릭 시 모달 창 닫기
closeBtn.addEventListener("click", function () {
  loginModal.classList.add("hidden");
});

// 3. 모달 외부 검은 배경 클릭 시 닫기
window.addEventListener("click", function (e) {
  if (e.target === loginModal) {
    loginModal.classList.add("hidden");
  }
});

// 4. 로그인 폼 제출 이벤트
loginForm.onsubmit = function (e) {
  e.preventDefault(); // 페이지 새로고침 방지

  const inputId = document.querySelector("#user_Id").value;
  const inputPw = document.querySelector("#user_Pw").value;

  if (inputId === id && inputPw === pw) {
    alert("로그인 성공!");
    loginModal.classList.add("hidden"); // 로그인 성공 시 모달 닫기
    document.querySelector("#user_Id").value = ""; // 입력란 초기화
    document.querySelector("#user_Pw").value = "";
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
