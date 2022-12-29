/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

let number = prompt('숫자를 입력해주세요',0);

if(number > 0){
  console.log('1'); 
} else if(number < 0){
  console.log('-1');
} else{
  console.log('아무것도 아닙니다.');
}



// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'yes';

// 영화 볼거니?
let goingToWatchMovie = 'no';


if(didWatchMovie.includes('yes')){ // if 문(statement)
  console.log('그거 재밌더라..?');
}else if(goingToWatchMovie === 'yes'){ // else if 복수 조건 처리
  console.log('같이 보러가자');
}else{ // else 절(caluse)
  console.log('아니 난 보기가 싫네');
}

let movieMessage =
(didWatchMovie.includes('yes')) ? '그거 재밌더라':
(goingToWatchMovie === 'yes') ? '같이 보러 가자' : '아니 난 보기가 싫네'


// 조건부 연산자

// 멀티 조건부 연산자 식