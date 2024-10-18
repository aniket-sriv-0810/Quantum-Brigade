const selectedMentor = document.getElementById('mentor');
// console.log(selectedMentor);

// const handleTimeSlotClick = (x)=>{
//     console.log(x.target);
// }
// console.log(mentors);
const ts = {
    "a": "9:30-10:30",
    "b": "10:30-11:30",
    "c": "11:30-12:30",
    "d": "12:30-1:30",
    "e": "2:30-3:30",
    "f": "3:30-4:30"
};

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
    let timeSlots = document.getElementById('timeSlots');
    timeSlots.innerHTML = '';
    for(let i=0;i<s.length;i++){
        const option = document.createElement('option');
        if(r[0].timeSlot.includes(s[i])){
            option.value = s[i];
            option.textContent = ts[s[i]];
            timeSlots.appendChild(option);
        }
        
    }
    // for(let i=0;i<s.length;i++){
    //     console.log(s[i]);
    //     if(r[0].timeSlot.includes(s[i])){
    //         document.getElementById(s[i]).classList.remove('unavailable');
    //     }
    //     else{
    //         document.getElementById(s[i]).classList.add('unavailable');
    //         document.getElementById(s[i]).style.pointerEvents = "none";

    //     }
    // }
})