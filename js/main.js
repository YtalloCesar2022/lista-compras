const form = document.getElementById("novoProduto")
const lista = document.getElementById("lista")
const itens = []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const produto = e.target.elements['produto']
    const quantidade = e.target.elements['quantidade']

    criaElemento(produto.value, quantidade.value)

    produto.value = ""
    quantidade.value = ""

})



function criaElemento(produto, quantidade) {

    const novoProduto = document.createElement('li')
    novoProduto.classList.add("item")

    const numeroProduto = document.createElement('strong')
    numeroProduto.innerHTML = quantidade

    novoProduto.appendChild(numeroProduto)
    novoProduto.innerHTML += produto

    lista.appendChild(novoProduto)

    const itemAtual = {
        "produto": produto,
        "quantidade": quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem("item2", JSON.stringify(itens))
}