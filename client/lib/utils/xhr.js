

/* readyState
0: uninitalized
1: loading
2: loaded
3:interative
4:complete
 */


// xhrData 함수 만들기 method, url
function xhrData({
  url = '',
  method = 'GET' ,
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}){


  // const {method,url,body} = options

  const xhr = new XMLHttpRequest();
  console.log(xhr);

  // 비동기 통신 오픈
  xhr.open(method, url)

  console.log(Object.entries(headers));

  // Object.entries(headers).forEach(([key,value])=>{
  //   xhr.setRequestHeader(key,value);
  // })

  xhr.addEventListener('readystatechange',()=>{
    const {status,readyState,response} = xhr; // 객체 구조 분해 할당
    
    if(status >= 200 && status < 400){
      if(readyState === 4){
        console.log('통신 성공');
        console.log(JSON.parse(response));
        // console.log();
      }
    }else{
        onFail('통신 실패')
      }
  })
  // 서버에 요청
  xhr.send(JSON.stringify(body));
}


/*
xhrData({
  url:'https://jsonplaceholder.typicode.com/users/1',
  onSuccess: (result)=>{
    console.log(result);
  },
  onFail:(err)=>{
    console.error(err);
  }
})
*/


// shorthand property
xhrData.get = (url,onSuccess,onFail) =>{
  xhrData({
    url,
    onSuccess,
    onFail
  })
}


xhrData.post = (url,onSuccess,onFail) =>{
  xhrData({
    method:'POST',
    body,
    url,
    onSuccess,
    onFail
  })
}


xhrData.put = (url,onSuccess,onFail) =>{
  xhrData({
    method:'PUT',
    body,
    url,
    onSuccess,
    onFail
  })
}


xhrData.delete = (url,onSuccess,onFail) =>{
  xhrData({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}



xhrData.delete(
  'https://jsonplaceholder.typicode.com/users/1',
  (result)=>{
    console.log(result);
  },
  (err)=>{
    console.log(err);
  }
)






// xhrData('GET','https://jsonplaceholder.typicode.com/users')