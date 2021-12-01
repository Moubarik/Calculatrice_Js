let lastsum = 0;
let view = "";
let operation =  null;
// let memory;

// const memoireElt = document.querySelector("#memoire");
const ecranelment = document.querySelector("#ecran");



// **************
// window.onload = () => {

//     let keys = document.querySelectorAll("button");
//     for(let key of keys){
//         key.addEventListener("click", walo);
//     }
// }

//  function walo(){
//     // console.log(this.innerText);
//     let key = this.innerText;
//     if(parseFloat(key) >= 0 || key === "."){
//         // console.log(key)
        
//         view = (view === "") ? key.toString() : view + key.toString();
//         ecranelment.innerText = view;
//     }
// **************

window.onload = () => {

    let keys = document.querySelectorAll("button");
    for(let key of keys){
        key.addEventListener("click", keyshandler);
    }
    localStorage.memory = "20"
    memory = (localStorage.memory) ? parseFloat(localStorage.memory) : 0;
    if (memory!= 0) memoryElement.style.display = 'intial';

}


// function displaydot() {
//     let dot = screen.value;
//     if (dot.includes('.')){
//         screen.value += '.';
//     }
// }


 function keyshandler(){
    // console.log(this.innerText);
    let key = this.innerText;
   
    if(parseFloat(key) >= 0 || key === "."){
        // console.log(key)
        
        view = (view === "") ? key.toString() : view + key.toString();
        ecranelment.innerText = view;
        
    }else{

        switch(key){
            case "C":
             lastsum = 0;
             view = "";
             operation =  null
             ecranelment.innerText = 0;
                break;

                case "+":
                case "-":
                case "*":
                case "/":
                    lastsum = (lastsum === 0) ? parseFloat(view) : calcul(lastsum, parseFloat(view), operation);
                    ecranelment.innerText = lastsum;  
                    operation = key;
                    view = "";
             break;

             case "=":
                lastsum = (lastsum === 0) ? parseFloat(view) : 
                calcul(lastsum, parseFloat(view), operation);   
                ecranelment.innerText = lastsum;  
                view = lastsum;
                lastsum = 0;
                break;
                // Case "M+":
                // // On stocke (en additionnant) à la valeur déjà en mémoire
                // localStorage.memoire = (localStorage.memoire) ? parseFloat(localStorage.memoire) + parseFloat(affichage) : parseFloat(affichage);
                // // On affiche le M
                // memoireElt.style.display = "initial";
                // break;


        }
    }


 
 
}

key

 




/**
 * @param {number} nb1 
 * @param {number} nb2 
 * @param {string} operation 
 * @returns number
 */

 function calcul(number1, number2,  ){
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    if(operation === "+") return number1 + number2;
    if(operation === "-") return number1 - number2;
    if(operation === "*") return number1 * number2;
    if(operation === "/") return number1 / number2;

 }