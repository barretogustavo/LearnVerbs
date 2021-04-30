//essas constantes são para facilitar o uso do querySelector(all)
const c = (el)=> document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);
//Mapeia a lista de verbo de acordo com o verboJson
verboJson.map((item, index)=>{
    let verboItem = c('.models .verbo-area').cloneNode(true); //clona a div modelo
    //Lista os verbos de acordo com o verboJson
    verboItem.setAttribute('id', index);
    verboItem.querySelector('#name-verbo').innerHTML = item.name;
    verboItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();

        let key = e.target.closest('.verbo-area').getAttribute('id');

        //Adciona informação na tela de acordo com o verbo clicado
        c('.verb-content').innerHTML = item.name;
        c('.traducao-text').innerHTML = item.traducao;
        //Troca da tela 3 para a tela 4 quando clica no verbo
        c('.screen3').style.display = 'none';
        c('.screen4').style.display = 'flex';
    })
    //esse comando serve para somar a div que está sendo preechida
    c('.screen3').append( verboItem );
});

//-----------------NEXT e BACK------------

//Tela 4 volta para 3
function backScreen(){
    c('.screen4').style.display = 'none';
    c('.screen3').style.display = 'flex';
}
//Tela 3 volta para 2
function backScreen2(){
    c('.screen3').style.display = 'none';
    c('.logo-area').style.display = 'none';
    c('.screen2').style.display = 'flex';
}
//Tela 2 volta para 1
function backScreen3(){
    c('.screen2').style.display = 'none';
    c('.screen1').style.display = 'flex';
}
//Tela 1 avança para 2
function nextScreen(){
    c('.screen1').style.display = 'none';
    c('.screen2').style.display = 'flex';
}
//Tela 2 avança para 3
function nextScreen2(){
    c('.screen2').style.display = 'none';
    c('.logo-area').style.display = 'flex';
    c('.screen3').style.display = 'flex';
}
//Tela 4 avança para 5
function nextScreen3(){
    c('.screen4').style.display = 'none';
    c('.screen5').style.display = 'flex';
}
//Tela 4 avança para 5
function backScreen4(){
    c('.screen5').style.display = 'none';
    c('.screen4').style.display = 'flex';
}


//função para marcar o verbo como feito (NÃO FUNCIONA)
/*function checked(){
    if(document.querySelector('.border-verbo').closest('.check-icon').classList.contains('border-verbo')){
        console.log("tem");
        c('.border-verbo').classList.remove('border-verbo');
        c('.border-verbo').classList.add('verbochecked');
    
    }else{
        c('.border-verbo').classList.remove('verbochecked');
        c('.border-verbo').classList.add('border-verbo');           
    }}*/
