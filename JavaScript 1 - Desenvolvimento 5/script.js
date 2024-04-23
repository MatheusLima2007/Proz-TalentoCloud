
    //Capturando Elemntos DOM
const titulo = document.createElement("h1")
const body = document.querySelector("body")
const produto = document.createElement("h2")
const preco = document.createElement("h2")
const imgProduto = document.createElement("div")
const descricao = document.createElement("p")



    //Manipulando os Elementos
titulo.innerHTML = `<ins>Eletronicos LP</ins>`
produto.innerText = "GeForce GTX 750 Ti 2 GB"
preco.innerHTML = "<em>R$860,00</em>"
imgProduto.innerHTML = `<img src="placa-de-video.jpg" alt="GeForce GTX 750" width="380" height="240">`
descricao.innerText = `
    Outro modelo de placa de vídeo barata de entrada é a GTX 750 Ti. Ela possui 2GB de memória
    VRAM no formato GDDR5 e usa uma interface de memória de 128Bits.O seu diferencial
    perante a anterior é a tecnologia G-Sync, que a sincroniza com monitores compatíveis para
    um desempenho mais estável.

    Apesar de ser um pouco mais potente, essa placa ainda fica limitada ao ramo de jogos leves, que
    não exigem um FPS muito alto. Você até conseguirá rodar alguns softwares como o Photoshop,
    se precisar trabalhar, mas, dependendo do projeto e número de efeitos usados, pode ser que a
    renderização demore.
`


    //Depurando-os na página
body.appendChild(titulo)
body.appendChild(produto)
body.appendChild(preco)
body.appendChild(imgProduto)
body.appendChild(descricao)
