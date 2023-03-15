const modalAutor = new bootstrap.Modal(document.getElementById('modalAutor'))

const on = (element,event,selector,handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector))
        {
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditaru', e => {
    console.log("si entro")
    const fila = e.target.parentNode.parentNode
    e_id.value = fila.children[0].innerHTML
    e_aut.value = fila.children[1].innerHTML
    e_nom.value = fila.children[2].innerHTML
    e_ape.value = fila.children[3].innerHTML
    e_pa.value = fila.children[4].innerHTML
    modalAutor.show();
})