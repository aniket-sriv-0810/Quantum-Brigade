const selectedMentor = document.getElementById('mentor');
// console.log(selectedMentor);

// const handleTimeSlotClick = (x)=>{
//     console.log(x.target);
// }
// console.log(mentors);
for(let i=0;i<mentors.length;i++){
    const option = document.createElement('option');
    option.value = mentors[i].name;
    option.textContent = mentors[i].name;
    selectedMentor.appendChild(option);
}
selectedMentor.addEventListener('change',(x)=>{
    let r = mentors.filter(mentor => mentor.name === x.target.value);
    console.log(r[0]);
    let s = "abcdef";

   
    for(let i=0;i<s.length;i++){
        console.log(s[i]);
        if(r[0].timeSlot.includes(s[i])){
            document.getElementById(s[i]).classList.remove('unavailable');
        }
        else{
            document.getElementById(s[i]).classList.add('unavailable');
            document.getElementById(s[i]).style.pointerEvents = "none";

        }
    }
})