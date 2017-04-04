let $=require('jquery')

export function getEssays(){
  let returnData
  let promise = new Promise(function(resolve,reject){
    $.ajax({  
      url: 'http://127.0.0.1:1724/',  
      type: 'GET',  
      dataType: 'json',  
      timeout: 1000,  
      cache: false,  
      success:function(data){
        resolve(data)
      },
      error:function(){
        reject()
      }
    }) 
  })
  return promise.then()
}




