import checkMidjourneyImage from "./checkMidjourneyImage"

const generateMidjourneyImage = (formData) => {
  return new Promise((resolve, reject)=>{
    fetch('/api/generate-midjourney-image', {
      method: 'POST', 
      body: formData
    })
    .then(res=>res.json())
    .then(res=>{
      console.log('mj generate started');
      setTimeout(()=>{
        console.log('20 second done');
        let myInterval = setInterval(()=>{
          console.log('interval');
          checkMidjourneyImage(res.messageId)
          .then(checkRes=>{
            if(checkRes.progress==100){
              clearInterval(myInterval)
              resolve(checkRes.images)
            }
          })
        }, 10000)
      }, 20000)
      
    })
  })
}


export default generateMidjourneyImage