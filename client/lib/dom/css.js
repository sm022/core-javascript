function addClass(node,className){

  if(typeof node !== 'string') node = getNode(node);


  if(typeof className !== 'string'){
    typeError('addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  }
  
  node.classList.add(className)
}


// 변경하기 : 대상의 클래스를 지운다
function removeClass(node,className){
  if(typeof node !== 'string') node = getNode(node);
  
  if(!className){
    node.className = ''
    return;
  }

  if(typeof className !== 'string'){
    typeError('removeClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  }
  

  node.classList.remove(className)
}



function toggleClass(node,className){
  if(typeof node === 'string') node = getNode(node); 
  if(typeof className !== 'string'){
    typeError('toggleClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  }
  
  node.classList.toggle(className)
}


// 대상에게 속성을 받아서 이 속성 값이 뭔지를 보여줘야 함
function getCss(node,prop){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(!(prop in document.body.style)){
    syntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }
  return getComputedStyle(node)[prop]
}


// 대상에게 원하는 css 속성을 추가 = set
function setCss(node,prop,value){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(!(prop in document.body.style)){
    syntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }

  if(!value){
    syntaxError('setCss 함수의 세 번째 인자는 필수값입니다.')
  }

  // if(value.replace(/\s+/g,'') === ''){
    
  // }

  node.style[prop] = value;
}

 
const css = (node,prop,value) => {
  return !value ? getCss(node,prop) : setCss(node,prop,value)
}