$(document).ready(function() {

    // evento de clicar (jQuery)
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#cancel-btn').click(function(){
        $('form').slideUp()
    })

    /* evento de clicar (javaScript)
    document.querySelector('header button').addEventListener('click', function(e) {}) */

    // evento para evitar que a página atualize ao enviar um dado (jQuery)
    $('form').on('submit', function(e) {
        e.preventDefault()
        const enderecodaNovaImagem = $('#endereco-imagem-nova').val()
        const novaImagem = $('<li style="display: none"></li>')
        $(`<img src="${enderecodaNovaImagem}" />`).appendTo(novaImagem)
        $(`
            <div class="overlay-images-link">
                <a href="${enderecodaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novaImagem)
        $(novaImagem).appendTo('ul')
        $(novaImagem).fadeIn(1000)
        $('#endereco-imagem-nova').val('')
        
    })
})