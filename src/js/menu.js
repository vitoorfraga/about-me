/* 

Objetivo
> Ao clicar sobre o menu hamburguer o menu (nav) deve ser "ativado" e aparecer no site.
> Ao clicar sobre o (X) o menu (nav) deve ser "desativado" e ocultado do site.

Itens:
1- Icone menu hamburguer.
2- icone (X).
3- Menu


*/


// Adicionar um event listener no botão hamburguer, quando o usuario clicar vamos adicionar a classe ".ativo" 

function abrirModal(){
  const btnAbrirModal = document.getElementById('icone-abrir')
  const menuModal = document.getElementById('menu')

  btnAbrirModal.addEventListener('click', () => {
    menuModal.classList.remove('esconder')
    console.log('menu abriu')
  })
}

function fecharModal(){
  const btnFecharModal = document.getElementById('icone-fechar')
  const menuModal = document.getElementById('menu')

  btnFecharModal.addEventListener('click', () =>{
    menuModal.classList.add('esconder')
    console.log('menu fechou')
  })
}
abrirModal()
fecharModal()
