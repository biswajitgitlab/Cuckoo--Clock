const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const door = document.querySelector('.door')
const cuckoo = document.querySelector('.cuckoo')

setInterval(() => {
    const day = new Date()
    const hours = day.getHours() * 30
    const minutes = day.getMinutes() * 6
    hourHand.style.transform = `rotate(${hours * (minutes/ 12)}deg)`
    minuteHand.style.transform=`rotate(${minutes}deg)`

    let hour =day.getHours()
    const minute = day.getMinutes()
    if(hour > 12) {
        hour = hour -12
    }
    const cuckooMove= () =>{
         door.style.animationIterationCount = `${hour}`;
    cuckoo.style.animationIterationCount = `${hour}`;

    }
    
    if(minute == 30){
        door.classList.add('active')
        cuckoo.classList.add('active')
        cuckooMove()
    }else{
        door.classList.remove('active')
        cuckoo.classList.remove('active')
    }
})