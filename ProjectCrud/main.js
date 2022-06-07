'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


const tempClient = {
    nome: "Marco",
    email: "marco@gmail.com",
    celular: "85988888888",
    cidade: "Fortaleza"
}

const createClient = (client) => {
    localStorage.setItem()
}
    
//Events
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)