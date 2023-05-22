$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('.nova-tarefa').val();
        const novoItem = (`<li>${novaTarefa}</li>`);
        $(`${novaTarefa}`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('li').click(function () {
            $("li").css("text-decoration: line-through");
        });
        $('.nova-tarefa').val('');
    });
});