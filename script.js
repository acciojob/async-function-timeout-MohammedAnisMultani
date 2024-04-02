//your JS code here. If required.
  let inputText = document.getElementById("text") 
         let inputNumber = document.getElementById("delay") 
         let btn = document.getElementById("btn")
          let output = document.getElementById("output")
         btn.addEventListener("click",(e)=>{
            e.preventDefault()
          let text = inputText.value
          let delay = inputNumber.value






          function genPromise(text,delay){
            return new Promise((resolve,reject)=>{
              setTimeout(()=>{
                    resolve(text)
              },delay)
            })
          }
         
         
          async function delayingThings(text,delay){
            let ans = await genPromise(text,delay)
              let div = document.createElement("div")
              div.innerText = ans;
              output.append(div)
          }
          delayingThings(text,delay);
        })