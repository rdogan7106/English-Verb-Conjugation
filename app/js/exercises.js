const exercisesAllIrregularVerbs = getElementById('exercises-all-irregular-verbs');
const btnGetRandomVerbForExercises = getElementById('get-random-verb-for-exercises');
const btnShow = getElementById('btn-show');
const btnClear = getElementById('btn-clear');
const inputV1 = getElementById('input-v1');
const inputV2 = getElementById('input-v2');
const inputV3 = getElementById('input-v3');
const verbForExercises = getElementById('verb-for-exercises');
const span = document.querySelectorAll('.span');
console.log(span)
exercisesAllIrregularVerbs.innerHTML = verbList
    .map((verb, index) => {
        return `
        <div class="col-lg-2 mb-3">
           <a onClick='getVerbForExercises(${index})' href='#'>${verb.verb1Name}</a>
        </div>
    `;
    })
    .join('');

btnGetRandomVerbForExercises.addEventListener('click', function () {
    getRandomVerbForExercises();
    clearInputs();
});

btnShow.addEventListener('click', function () {
   verbList.forEach(verb => {
       if(verb.verbTurkish === verbForExercises.innerHTML){
           inputV1.value = verb.verb1Name;
           inputV2.value = verb.verb2Name;
           inputV3.value = verb.verb3Name;
           fillInput1();                  
           fillInput2();                  
           fillInput3();                  
        }   
   });
});

btnClear.addEventListener('click', function () {
    clearInputs();
});
function getVerbForExercises(pVerbIndex) {
    verbForExercises.innerHTML = verbList[pVerbIndex].verbTurkish;
}

function getRandomVerbForExercises() {
    let randomNumber = getRandomNumber(verbList.length);
    let randomVerb = verbList[randomNumber];
    verbForExercises.innerHTML = randomVerb.verbTurkish;
    return randomVerb;       
}

function clearInputs() {
    inputV1.value = ''; 
    inputV2.value = ''; 
    inputV3.value = ''; 
    removeInput1();
    removeInput2();
    removeInput3();
}
getRandomVerbForExercises();

function removeInput1(){       
    inputV1.classList.remove('border-success');
    span[0].innerHTML ='X'; 
    span[0].classList.remove('bg-success');          
    span[0].classList.remove('text-white');
}
function removeInput2(){  
    inputV2.classList.remove('border-success');          
    span[1].innerHTML ='X';
    span[1].classList.remove('bg-success');          
    span[1].classList.remove('text-white');  
}
function removeInput3(){
    inputV3.classList.remove('border-success');           
    span[2].innerHTML ='X';
    span[2].classList.remove('bg-success');        
    span[2].classList.remove('text-white');
}
function fillInput1(){
    inputV1.classList.add('border-success');    
    span[0].innerHTML ='&checkmark;' 
    span[0].classList.add('bg-success')          
    span[0].classList.add('text-white')          
     
}
function fillInput2(){
    inputV2.classList.add('border-success');          
    span[1].innerHTML ='&checkmark;'; 
    span[1].classList.add('bg-success') ;         
    span[1].classList.add('text-white');          
}
function fillInput3(){   
    inputV3.classList.add('border-success'); 
    span[2].innerHTML ='&checkmark;' 
    span[2].classList.add('bg-success')          
    span[2].classList.add('text-white')  
}

inputV1.addEventListener('keyup',function(){
    const inputV1 = getElementById('input-v1');
   verbList.forEach(element => {
       if(element.verb1Name === inputV1.value.toLowerCase().trim()){
        fillInput1();     
     }  
   });
})
inputV1.addEventListener('keydown',function(){
    const inputV1 = getElementById('input-v1');
   verbList.forEach(element => {
       if(element.verb1Name !== inputV1.value.toLowerCase().trim()){
        removeInput1();     
     }  
   });
})

inputV2.addEventListener('keyup',function(){
    const inputV2 = getElementById('input-v2');
   verbList.forEach(element => {
       if(element.verb2Name === inputV2.value.toLowerCase().trim()){
       fillInput2();        
     }
      
   });
})
inputV2.addEventListener('keydown',function(){
    const inputV2 = getElementById('input-v2');
   verbList.forEach(element => {
       if(element.verb2Name !== inputV2.value.toLowerCase().trim()){
       removeInput2();        
     }
      
   });
})

inputV3.addEventListener('keyup',function(){
    const inputV3 = getElementById('input-v3');
   verbList.forEach(element => {
       if(element.verb3Name === inputV3.value.toLowerCase().trim()){
       fillInput3();         
     }
       
   });
})
inputV3.addEventListener('keydown',function(){
    const inputV3 = getElementById('input-v3');
   verbList.forEach(element => {
       if(element.verb3Name !== inputV3.value.toLowerCase().trim()){
       removeInput3();         
     }
       
   });
})