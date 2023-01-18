


import { getNode } from "../dom/getNode.js";



const first = getNode('.first');


function delay(callback,timeout = 1000){
  setTimeout(callback, timeout);
}

/*
delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    delay(()=>{
    first.style.top = '0px';
    })
      first.style.transform = 'rotate(360deg)';
  })
})
*/


delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  return delayP()
})
.then(()=>{
  first.style.top = '0px';
})



function delayP(shouldReject = false, timeout = 1000, data='성공했습니다.', errorMessage = '알 수 없는 오류가 발생했습니다.'){

  return new Promise((resolve, reject)=>{
    
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  })
}


delayP(false,1000,'성공했습니다.','오류가 발생했습니다.');
// .then(res=>console.log(res))
// .catch(err=>console.log(err))



// async await