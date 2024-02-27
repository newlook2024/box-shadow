let shadow = document.querySelectorAll('#shadow')

shadow.forEach(function(item , index){
    item.addEventListener(`click`, function(){
        item.textContent = 'copied'
        navigator.clipboard.writeText(`box-shadow:${window.getComputedStyle(item).boxShadow};`)
        setInterval(function(){
            item.textContent = 'ready'
        }, 500 )
    })
})
