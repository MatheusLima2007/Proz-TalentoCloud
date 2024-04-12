    //Capturando Elementos 
const h1 = document.getElementById('titulo')
const ul = document.querySelector('ul')
const a  = document.querySelector('a')
const ol = document.getElementById('lista-ordenada')

    //Alterando Elementos com innerText
h1.innerText = "Proz - TalentoCloud"
a.innerText = "Site Oficial Proz"

    //Alterando Elementos com innerHTML
ul.innerHTML = `

<li>Cursos Gratuitos</li>
<li>Promoções imperdiveis</li>
<li>Livre Acesso</li>
<li>Empresa Sustentavel</li>
`

ol.innerHTML = `

<li><a href="https://www.youtube.com/@ProzEducacaobr">YouTube<a/></li>
<li><a href="https://www.facebook.com/prozeducacaobr/">Facebook<a/></li>
<li><a href="https://www.instagram.com/prozeducacaobr/">Instagram<a/></li>
<li><a href="https://br.linkedin.com/school/prozeducacao/">Linkedin<a/></li>
`
