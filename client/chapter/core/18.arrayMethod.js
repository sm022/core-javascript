/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10,100,1000,10000]

function isArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}

function isNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'
}


console.log(Array.isArray([]));



/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {}

arr.forEach(function(item,index){
  //user[0] = 10
  this[index] = item
},user)


// span[0].addEventListener('click',()=>{
//   console.log('first');
// })

const span = document.querySelectorAll('span');

span.forEach((item)=> {

  item.addEventListener('click',(e)=>{
    console.log(e.target.style.background = 'orange');
    // console.log(index);
  })

})

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
arr.reverse()
// console.log(arr);

// splice
//        시작 제거 [추가]
arr.splice(1,0,23,5)
// console.log(arr);

//반환 값 < 0 : a가 b보다 앞에 있어야 한다.
//반환 값 = 0 : a와 b의 순서를 바꾸지 않는다.
//반환 값 > 0 : b가 a보다 앞에 있어야 한다.

// sort
arr.sort((a,b)=>{
  return a - b // b - a
})
// console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

let todo = ['밥먹기','복습하기','공부하기'];

let template = todo.map((todolist)=>{
  return /* html */ `<li>${todolist}</li>`
})

template.forEach((item) => {
  document.body.insertAdjacentHTML("beforeend", item);
});

let newArray = arr.map( item => item * 2)
console.log(newArray);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf

// console.log( arr.indexOf(5) );


// lastIndexOf
// includes

// console.log( arr.includes(10) );

/* 요소 찾기 -------------------------------------------------------------- */
const users = [
  {id:1,name:'하나'},
  {id:2,name:'투투'},
  {id:3,name:'오륙'},
]
// find

const find = users.find((item,index)=>{
  return item.id === 3 // id < 2 , id < 5
})

// console.log(find)


// findIndex
const findIndex = users.findIndex((item)=>{
  return item.id === 3 
})

console.log(findIndex);

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

let result = arr.filter((number)=>{
  return number > 100
})

console.log(result);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: "이하나",
    age: 26,
    job: "무직",
  },
  {
    name: "김투투",
    age: 24,
    job: "취준생",
  },
  {
    name: "박오륙",
    age: 21,
    job: "학생",
  },
];

// reduce

// 친구들 나이의 총 합을 구하세요.
let age = friends.reduce((acc,cur)=>{
  return acc + cur.age
},0)


let template2 = todo.reduce((acc,cur)=>{
  // return /* html */ acc + `<li>할일 ${index + 1} : ${cur}</li>`
},'')

console.log(template2);

console.log(age);

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = '하나 투투 세번 포포 오륙 식스'

// split : 문자 -> 배열
let nameArray = str.split(' ');
console.log(nameArray);

// join : 배열 -> 문자
console.log(nameArray.join(' / '));