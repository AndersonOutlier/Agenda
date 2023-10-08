const contacts =[
    {name:'anderson',number:'3598881-1278'},
    {name:'pedro',number:'1299895-1245'},
    {name:'maria',number:'3498813-4512'} ,
]

let btnSearch = document.getElementById('btnSearch');
let nameContact = document.getElementById('nameContact');
let resultNumber = document.getElementById('resultNumber');
let resultName = document.getElementById('resultName');
let nameInserted;
btnSearch.addEventListener('click',function(){

    nameInserted = nameContact.value.toLowerCase();             
    nameContact.value = '';    

    let numberSearched = contacts.find(function(contact){
        return contact.name === nameInserted;
    })
    
    if(numberSearched==undefined){
        resultName.innerHTML = 'Nome não encontrado!'
        setTimeout(function(){
            resultName.innerHTML = '';
        },3000)
    }

    let numberFound = numberSearched.number;
    
    
    resultName.innerHTML = nameInserted.toUpperCase();    
    resultNumber.innerHTML = numberFound;

    setTimeout(function(){

        resultName.innerHTML = '';
        resultNumber.innerHTML = '';

    },5000)    
})






