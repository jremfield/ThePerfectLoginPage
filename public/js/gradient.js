const gradient = document.querySelector('div#gradient')

document.addEventListener('mousemove', (event) => {
    let x = `calc(${event.clientX}px - 50%)`
    let y = `calc(${event.clientY}px - 50%)`

    let keyframes = {
        transform: `translate(${x}, ${y})`
    }

    gradient.animate(keyframes, {
        duration: 800,
        fill: 'forwards'
    })
})