const modalLibro = new bootstrap.Modal(document.getElementById('modalLibro'))

const on = (element,event,selector,handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector))
        {
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditara', e => {
    console.log("si entro")
    const fila = e.target.parentNode.parentNode
    e_id.value = fila.children[0].innerHTML
    e_cod.value = fila.children[1].innerHTML
    e_ti.value = fila.children[2].innerHTML
    e_edi.value = fila.children[3].innerHTML
    e_au.value = fila.children[4].innerHTML
    modalLibro.show();
})