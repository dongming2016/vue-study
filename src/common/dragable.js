export default {
    bind: function (el, binding) {
        let element = el
        element.onmousedown = function (event) {
            // Prevent default dragging of selected content
            event.preventDefault()
            // record the mouse to the border of the element
            let startX = event.pageX - element.offsetLeft
            let startY = event.pageY - element.offsetTop

            document.onmousemove = function (event) {
                let left = event.pageX - startX
                let top = event.pageY - startY
                element.style.left = left + 'px'
                element.style.top = top + 'px'
            }

            document.onmouseup = function (event) {
                document.onmousemove = null
                document.onmouseup = null
            }
        }
    }
}
