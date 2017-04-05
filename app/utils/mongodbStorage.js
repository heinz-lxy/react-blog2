let $=require('jquery')

export function getEssays(){
  let returnData
  let promise = new Promise(function(resolve,reject){
    $.ajax({  
      url: 'http://127.0.0.1:1724/getessays',  
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


export function saveEssay(essay){
  let promise = new Promise(function(resolve,reject){
    $.ajax({  
      url: 'http://127.0.0.1:1724/saveessay',  
      type: 'post',
      data:essay,  
      dataType: 'json',  
      timeout: 1000,  
      cache: false,  
      success:function(data){
        resolve(data)
      },
      error:function(err){
        reject(err)
      }
    }) 
  })
  return promise
}


export function deleteEssay(id){
  let promise = new Promise(function(resolve,reject){
    $.ajax({  
      url: 'http://127.0.0.1:1724/deleteessay',  
      type: 'post',
      data:{_id:id},  
      dataType: 'json',  
      timeout: 1000,  
      cache: false,  
      success:function(data){
        resolve(data)
      },
      error:function(err){
        reject(err)
      }
    }) 
  })
  return promise
}









  






