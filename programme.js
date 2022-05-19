//1.sélectionner les champs
let leJustePrix;
let formulaire;
let input;
let error;
let nombreAleatoire;
let coups = 0;
let nombreChoisi;
let maxAttempt;
(() => {
     leJustePrix = {
        init: (event) => {
            window.addEventListener('load', (event) => {
                formulaire = document.querySelector('#formulaire');
                input      = document.querySelector('#prix');
                error      = document.querySelector('small');
                // console.log(formulaire);
                //2.Cacher l'erreur
                error.style.display = "none"; 
                //3.Générer un nombre aléatoire
                nombreAleatoire = Math.floor(Math.random() * 1001);
                // console.log(nombreAleatoire);
                //6.fonction verifier
                function verifier(nombre){
                    let instruction = document.createElement('div');
                    if((nombre < nombreAleatoire && coups <= maxAttempt)){
                        instruction.textContent = "#" + coups + " (" + nombre + " ). C'est plus !";
                        instruction.className = ('instruction plus');
                    }else if(nombre > nombreAleatoire && coups  <= maxAttempt){
                        instruction.textContent = "#" + coups + " (" + nombre + " ). C'est moins !";
                        instruction.className = ("instruction moins");
                    }else if(nombre == nombreAleatoire && coups  < maxAttempt){
                        instruction.textContent = "#" + coups + " (" + nombre + " ). Félicitations vous avez trouvé le juste prix !";
                        instruction.className = ("instruction fini");
                    }else{
                        if(confirm("Vous avez épuisé toutes vos chances de trouver le juste prix. Voulez-vous réessayer?")){
                            location.href = 'index.html';
                        }
                    }
                    //7.Ajouter l'élement devant les autres
                    document.querySelector('#instructions').prepend(instruction);

                }
                do {
                  maxAttempt = Number(prompt("Combien de tentatives souhaiteriez-vous avoir?")); 
                } while (isNaN(maxAttempt) || maxAttempt == '' );
                //4.Vérifier que l'utilisateur donne un nombre
                input.addEventListener('keyup', () => {
                    if(isNaN(input.value)){
                        error.style.display = "inline ";
                        // input.style.borderColor = "red";
                    }else{
                        error.style.display = "none";
                        // input.style.borderColor = "silver";
                    }
                })
                //5.agir à l'envoi du formulaire
                formulaire.addEventListener('submit', (event) => {
                    //annuler l'évènement par défaut consistant à envoyer les données
                    event.preventDefault();
                    if(isNaN(input.value) || input.value == ""){
                        input.style.borderColor = "red";
                    }else{
                        coups++;
                        input.style.borderColor = "silver";
                        nombreChoisi = input.value;
                        input.value = "";
                        verifier(nombreChoisi);
                    }
                })
            })
        }
    }
    leJustePrix.init();
})();
