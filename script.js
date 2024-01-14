(function(){
    const input = document.getElementById('urlInput');
    input.focus();
    input.addEventListener('input', () => {
        window.open(input.value.replace(/\s/g, ''), '_blank');
        input.value = '';
    })
})()