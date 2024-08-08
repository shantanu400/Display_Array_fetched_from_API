document.getElementById('btnp').addEventListener('click',()=>{ // onclick this will run function promise1 and keep resolving another promise as previous promise got resolved
promise1().then((result1)=>{
    if(result1){
        return promise2()
    }
    
    })
    .then((result2)=>{
        if(result2){
            return promise3()
        }
    })
    .catch(err=>console.log(err))
})

function promise3(){  //for resolving promise3
    return new Promise((resolve,reject)=>{  // instance of promise created

        setTimeout(()=>{
            let req=fetch('https://dummyjson.com/todos')  //fetching API 
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
            let promise3div=document.createElement('div')
            promise3div.textContent=JSON.stringify(data)   // converting o JSON string
            document.body.appendChild(promise3div);
            resolve(true);  //resolving promise
        }
        )
        .catch(err=>console.log(err))    //catching error
        },3000)
    })
   
    
    }

function promise2(){
    return new Promise((resolve,reject)=>{ // instance of promise created
        setTimeout(()=>{
            let req=fetch('https://dummyjson.com/products')  //fetching API 
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
            let promise2div=document.createElement('div')
            promise2div.textContent=JSON.stringify(data)   // converting o JSON string
            document.body.appendChild(promise2div);
            resolve(true);  //resolving promise
            
        }
        )
        .catch(err=>console.log(err))   //catching error
        },2000)
        
    })
    
    }


function promise1(){
    return new Promise((resolve,reject)=>{ // instance of promise created
        setTimeout(()=>{
    
            let req=fetch('https://dummyjson.com/posts')  //fetching API 
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
            let promise1div=document.createElement('div')
            promise1div.textContent=JSON.stringify(data)   // converting o JSON string
            document.body.appendChild(promise1div);
            resolve(true);  //resolving promise
           
        }
        )
        .catch(err=>console.log(err))  //catching error
        },1000)

    })


}


