

const defaultOptions = {
  method:'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-reffere',
  headers:{
    'Content-Type' : 'application/json; charset=UTF-8'
  }
}


export const power = async (options = {}) =>{

   const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    headers: {...defaultOptions.headers, ...options.headers}
  }

  console.log(restOptions);

  let response = await fetch(url,restOptions)
      
  if(response.ok){
    response.data = await response.json()
  }

  // console.log(response);
  
  return response;
}


power.get = (url,options) => {
  power({
    url,
    ...options
  })
}


power.post = (url,body,options) => {
  power({
    method:'POST',
    url,
    body: JSON.stringify(body),
    ...options
  })
}


power.put = (url,body,options) => {
  power({
    method:'PUT',
    url,
    body: JSON.stringify(body),
    ...options
  })
}


power.delete = (url,body,options) => {
  power({
    method:'DELETE',
    url,
    ...options
  })
}

