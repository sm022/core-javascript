

/* readyState
0: uninitalized
1: loading
2: loaded
3:interative
4:complete
 */


function xhrData(method,url){

  const xhr = new XMLHttpRequest();

// 비동기 통신 오픈
  xhr.open('GET','https://jsonplaceholder.typicode.com/users')


  xhr.addEventListener('readystatechange',()=>{
    if(xhr.status >= 200 && xhr.status < 400){
      if(xhr.readyState === 4){
        console.log('통신 성공');
        }
      }else{
        console.log('통신 실패');
      }
})

// 서버에 요청
xhr.send();
}

xhrData('GET','https://jsonplaceholder.typicode.com/users')