const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0) 
    event.target.classList.add('hede')
}
function dragend() {
    event.target.className ='item'

    //  ↓ тоже самое, что и строчка выше обращение к ↑
    // event.target.classList.remove('hide', 'hide')
    // event.target.classList.remove('hold')
    // event.target.classList.remove('hide')

}

function dragover(evetn) {
    // ↓ фиксирует положение перетаскиваемого объекта 
    evetn.preventDefault()
 
}

function dragenter(evetn) {
    evetn.target.classList.add('hovered')
   
}

function dragleave(evetn) {
    evetn.target.classList.remove('hovered')
}

function drop(evetn) {
    evetn.target.classList.remove('hovered')
    event.target.append(item)
    
}
