 document.querySelector(".hamburguer").addEventListener("click",() =>
   document.querySelector(".container").classList.toggle("show-menu")

);

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-s").addEventListener("change", atualizarPreco)
document.querySelector("#layout-n").addEventListener("change", atualizarPreco)


function atualizarPreco(){
  const qtde = document.querySelector("#qtde").value
  const temJS = document.querySelector("#js").checked
  const incluilayout = document.querySelector("#layout-s").checked

  

  let preco = qtde * 100;
  if (temJS) preco *= 1.1
  if(incluilayout)  preco += 250
  
  
  
  document.querySelector("#preco").innerHTML = `R$  ${preco.toFixed(2)}`

}


