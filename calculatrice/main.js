const touches = [...document.querySelectorAll('.bouton')];
const listKeyCode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) =>{
    const valeur = e.keyCode.toString();
    calculer(valeur)

})

document.addEventListener('click', (e) =>{
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    if(listKeyCode.includes(valeur)){
        if(ecran.textContent == "0+0"){
            ecran.textContent = "'La tête à toto !'";
        }
        if(ecran.textContent == "48"){
            window.open('http://xp48.tech', '_blank');
            ecran.textContent = "";
        }
        switch(valeur) {
            case '8' :
                ecran.textContent = "";
                break;
            case '13':
                if(ecran.textContent.indexOf("x") != -1) {
                    ecran.textContent = ecran.textContent.replace("x", "*");
                }
                if(ecran.textContent.indexOf("^") != -1) {
                    ecran.textContent = ecran.textContent.replace("^", "**");
                }
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeyCode = listKeyCode.indexOf(valeur);
                const touche = touches[indexKeyCode];
                ecran.textContent += touche.innerHTML;

        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul :\n\n'+ e.message);
    ecran.textContent = "";
})

