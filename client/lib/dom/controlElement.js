import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";


// JSDoc

/**
 * @function isElement checkElement
 * @param {HTMLElement} node 
 * @return {disabled} set disabled
 */

export function disableElement(node){
  
  if(!isElement(node)){
    typeError('disabelElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.disabled = true;
}


export function enableElement(node){
  
  if(!isElement(node)){
    typeError('disabelElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }

  node.disabled = false;
}

// 보여야 함
export function visibleElement(node){
  if(!isElement(node)){
    typeError('disabelElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.hidden = false;
}


// 안보여야 함
export function invisibleElement(node){
  if(!isElement(node)){
    typeError('invisibleElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.hidden = true;
  
}