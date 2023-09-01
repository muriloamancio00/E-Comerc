import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalago(){
    for(const produtoCatalago of catalogo){
        const cartaoProduto = `<div class='w-48 m-2 flex flex-col p-2 border-solid justify-between shadow-xl shadow-slate-400 rounded-lg group' id ="card-produto-${produtoCatalago.id}">
        <img 
            src="./assets/img/${produtoCatalago.imagem}"
            alt="Produto 1 do Magalu."
            class='group-hover:scale-110 duration-300 my-3 rounded-lg'  
        />
        <p class='text-sm'>${produtoCatalago.marca}</p>
        <p class='text-sm'>${produtoCatalago.nome}</p>
        <p class='text-sm'>$${produtoCatalago.preco}</p>
        <button  id='adicionar-${produtoCatalago.id}' class='bg-slate-950 hover:bg-slate-700 text-slate-200'><i class="fa-solid fa-cart-plus"></i></button>
    </div>`;
    
        document.getElementById("container-produto").innerHTML += cartaoProduto;
        document.getElementById(`adicionar-${produtoCatalago.id}`);
    }

    for (const produtoCatalago of catalogo) {
        document.getElementById(`adicionar-${produtoCatalago.id}`)
            .addEventListener('click', () => adicionarAoCarrinho(produtoCatalago.id));
    }
}
