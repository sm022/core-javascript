

import { diceAnimation, getNode } from "./lib/index.js";

/*
[주사위 굴리기]
1. dice 애니메이션 불러오기
2. bindEvent 유틸 함수 만들기
3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
4. 변수 보호를 위한 클로저 + IIFE 사용하기

..diceAnimation()
*/

/*
[주사위 굴리기]
1. dice 애니메이션 불러오기
2. bindEvent 유틸 함수 만들기
3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
4. 변수 보호를 위한 클로저 + IIFE 사용하기

..diceAnimation()
*/


const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');


// IIFE
const handlerRollingDice = (() => {
  
  let isRolling = false;
  let stopAnimation;
  // diceAnimation()
  // stopAnimation = setInterval(diceAnimation,100)

  return () => {
    if(!isRolling){
      stopAnimation = setInterval(diceAnimation,100)
    }else{
      clearInterval(stopAnimation);
   }

  isRolling = !isRolling;
 }

})()


rollingDiceButton.addEventListener('click',handlerRollingDice)





