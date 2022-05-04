$(document).ready(function () {
    $("#body").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});
tippy('#tooltip1', {
    content: 'Пример современных тенденций - современная методология разработки!',
});
tippy('#tooltip2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
});
tippy('#tooltip3', {
    content: 'В стремлении повысить качество',
});

