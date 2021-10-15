// let myName = "WUNGHUI";
// let email = 'dndwk9946@gmail.com'
// let hello = `Hello ${myNmae}?!`;
// // `` ${} 보관법사용할때
// console.log(myName);
// console.log(email);
// console.log(hello);

// let user = {
//     name : 'wunghui',
//     age : 23,
// };
// console.log(user);
// console.log(user.age);
// console.log(user.name);

// //값 재할당 가능 
// let a = 12;
// console.log(a); //12
// a = 999;
// console.log(a);//999
// //값 재할당 불가 
// const a = 12;
// console.log(a); //12
// a = 999;
// console.log(a);//error

// this if break 는 예약어 이므로 변수로 사용할 수 없다
// let this = 'hello' 사용 불가

// let isShow = true;
// let checked = false;

// if (isShow) {
//     console.log('Show'); //Show 실행
// }
// if (checked) {
//     console.log('Checked!'); //Checked 실행x
// }

// let isShow = true;
// if (isShow) {
//     console.log('Show!');
// } else {
//     console.log('Hide?')
// }
// 변수 isShow 가 트루이면 Show가 출력되고 틀리면 Hide를 출력

//HTML 요소(Element) 1개 검색/찾기
// let boxEl = document.querySelector('.box');

// // HTML 요소에 적용할 수 있는 메소드
// boxEl.addEventListener();

// // 인수(Arguments)를 추가 가능!
// boxEl.addEventListener(1,2);

// // 1 - 이벤트(이벤트, 상황)
// boxEl.addEventListener('click', 2);

// // 2 - 핸들러(핸들러, 실행할 함수)
// boxEl.addEventListener('click', function(){
//     console.log('click')
// });

// let boxEl = document.querySelector('.box');
// console.log(boxEl);
// boxEl.addEventListener('click', function(){
//     console.log(boxEl);
// });


// const boxEl = document.querySelector('.box');
// //요소의 클래스 정보 객체 활용!
// boxEl.classList.add('active');
// let isContains = boxEl.classList.contains('active');
// console.log(isContains); //true

// boxEl.classList.remove('active');
// isContains = boxEl.classList.contains('active');
// console.log(isContains); // false


// let boxEl = document.querySelector('.box');

// boxEl.addEventListener('click',function(){
//     console.log('Click!!')
//     boxEl.classList.add('active');
//     console.log(boxEl.classList.contains('active')
//     // boxEl에 active 란 클래스가 있는 지 없는지 확인
//     );
//     boxEl.classList.remove('active');
//     console.log(boxEl.classList.contains('active')
//     );
// });

// //Html 요소(Element) 모두 검색/찾기
// const boxEls = document.querySelectorAll('.box');
// console.log(boxEls);

// //찾은 요소들 반복해서 함수 실행! forEach
// //익명 함수를 인수로 추가
// boxEls.forEach(function() {});

// //첫번째 매개변수(boxEl) : 반복 중인 요소
// //두번째 매개변수(index) : 반복 중인 번호
// boxEls.forEach(function (boxEl, index) {})

// const boxEls = document.querySelectorAll('.box');
// boxEls.forEach(function (boxEl, index) {
//     boxEl.classList.add(`order-${index +1}`)
//     console.log(index, boxEl)
// });

// const boxEl = document.querySelector('.box');
// // Getter, 값을 얻는 용도
// console.log(boxEl.textContent) // 1
// // Setter, 값을 지정하는 용도
// boxEl.textContent = 'hello';
// console.log(boxEl.textContent)

// const boxEl = document.querySelector('.box');
// console.log(boxEl.textContent);
// boxEl.textContent = 'hello!'
// console.log(boxEl.textContent)

// const a = 'hello~';
// // split: 문자를 인수 기준으로 쪼개서 배열로 반환.
// // reverse : 배열을 뒤집기.
// // join : 배열을 인수 기준으로 문자로 병합해 반환.
// const b = a.split('').reverse().join(''); // 메소드 체이닝...

// console.log(a)
// console.log(b)

// const boxEl = document.querySelectorAll('.box');
// boxEl.forEach(function (boxEls) {
//     boxEls.classList.add('hello')
//     console.log(boxEls)
// })

const boxEl = document.querySelector('.box');
boxEl.classList.add('active')
if(boxEl.classList.contains('active')){
console.log('포함됨!') }
