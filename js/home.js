// Get name from localStorage
const Username = localStorage.getItem('name');

// Display welcome message
if (Username) {
    document.getElementById('welcomeMessage').textContent = `Hello, ${Username}!`;
} else {
    document.getElementById('welcomeMessage').textContent = 'Hello, Guest!';
}
const counts = document.querySelectorAll('.count')
const speed = 97

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})