const modalEditorial = new bootstrap.Modal(document.getElementById('modalEditorial'))

const on = (element,event,selector,handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector))
        {
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditare', e => {
    console.log("si entro")
    const fila = e.target.parentNode.parentNode
    e_id.value = fila.children[0].innerHTML
    e_edi.value = fila.children[1].innerHTML
    e_edit.value = fila.children[2].innerHTML

    modalEditorial.show();
})