/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = LUNCH;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

switch (thisTime) {
  case MORNING:
    console.log('아침을 먹는다.');
    break;
  case LUNCH:
    console.log('점심을 먹는다.');
    break;
  case DINNER:
    console.log('저녁을 먹는다.');
    break;  
  case NIGHT:
    console.log('운동을 하고 휴식을 취한다');
    break;    
  case LATE_NIGHT:
  case DAWN:
    console.log('충전한다.');
    break;
      
      
}

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */

if(thisTime === MORNING){
  console.log('아침을 먹는다');
} else if(thisTime === LUNCH){
  console.log('점심을 먹는다');
} else if(thisTime === DINNER){
  console.log('저녁을 먹는다');
} else if(thisTime === NIGHT){
  console.log('운동을 하고 휴식을 취한다');
} else if(thisTime === LATE_NIGHT || thisTime === DAWN){
  console.log('충전한다');
}

/* switch vs. if -------------------------------------------------------- */

// 0 ~ 6의 값을 받는다. 0: '일' ~ 6: '토'

// 임의의 숫자를 넣어서 무슨 요일인지를 알려주는 함수를 만들어보자

function getRandom(n){
  return Math.round(Math.random() * n)
}

function getDay(dayValue){

  switch (dayValue) {
    case 0 : return '일'; 
    case 1 : return '월'; 
    case 2 : return '화'; 
    case 3 : return '수'; 
    case 4 : return '목'; 
    case 5 : return '금'; 
    case 6 : return '토'; 
  }
}



let result = getDay(getRandom(6));

console.log(result);

