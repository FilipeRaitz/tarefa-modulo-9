$(function(){
    $('#form-nova-tarefa').on('submit', function(e){
        e.preventDefault();
        const inputTarefa = $('#input-nova-tarefa').val(); 
        
        adicionarTarefa(inputTarefa);
    })

    function adicionarTarefa(tarefa) {
        $('.lista-tarefas').append(
            `
            <li class="item-da-lista">
                <p class="tarefa-da-lista">
                    ${tarefa}
                </p>
                <div class="container-botoes">
                    <button class="btn-concluir"><img src="./imagens/check.png" title="Marcar como concluída" alt="Checar"></button>
                    <button class="btn-excluir"><img src="./imagens/Xicon.png" title="Cancelar tarefa" alt="Cancelar"></button>    
                </div>
            </li>
            `
        )
        
    }

    $('.lista-tarefas').on('click','.btn-concluir', function(){
        $(this).parent().prev().toggleClass('concluida')
    })

    $('.lista-tarefas').on('click','.btn-excluir', function(){
        confirma = confirm('Tem certeza que quer excluir essa tarefa?')
        if (confirma) {$(this).parentsUntil('ul').remove()}
    })
    
})