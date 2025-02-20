

function buscarProdutos(){
    fetch("https://fakestoreapi.com/products")
       .then((resposta ) =>resposta.json())
       .then((resposta) =>{
           
       })
}

buscarProdutos()

function carregarProduto(listaDeProduto){
    let grade = document.querySelector("gradeDeProduto");
    grade.innerHTML = "";
    listaDeProduto.map((produto)=>{
        grade.innerHTML +=´
        ´;
    }

    )
}