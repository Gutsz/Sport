$('.navigation').on('click', '.menu-icon', function () 
{
    $('.navigation-container').slideToggle(400);
});

jQuery(document).ready(function () {

            $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            });

        });