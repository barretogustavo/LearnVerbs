//essas constantes são para facilitar o uso do querySelector(all)
const c = (el)=> document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

verboJson.map((item, index)=>{
    let verboItem = c('.models .verbo-area').cloneNode(true);
    
    c('#name-verbo').innerHTML = item.name;
    verboItem.querySelector('a').addEventListener('click', (e)=>{ //Adiciona um evento
        e.preventDefault(); //Retira as ações padrões a tag <a>
        
        c('.verb-content').innerHTML = item.name;
        console.log(verboJson[item.id-1]); //Esse -1 é para controlar o id a seu respectivo conteudo
        
        
        
        //Quando o user clica no verbo, ativa a tela 4
        c('.screen3').style.display = 'none';
        c('.screen4').style.display = 'flex';
    });
    //esse comando serve para somar a div que está sendo preechida
    c('.screen3').append( verboItem );
});

