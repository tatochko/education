$(function(){

    var Menu = {

        el: {
        ham: $('.header__btn'),
        menuTop: $('.header__btn-top'),
        menuMiddle: $('.header__btn-middle'),
        menuBottom: $('.header__btn-bottom')
        },
        
        init: function() {
        Menu.bindUIactions();
        },
        
        bindUIactions: function() {
        Menu.el.ham
            .on(
                'click',
            function(event) {
            Menu.activateMenu(event);
            event.preventDefault();
            }
        );
        },
        
        activateMenu: function() {
        Menu.el.menuTop.toggleClass('header__btn-top-click');
        Menu.el.menuMiddle.toggleClass('header__btn-middle-click');
        Menu.el.menuBottom.toggleClass('header__btn-bottom-click'); 
        }
    };
    
    Menu.init();


    $('.header__btn-global').on('click', function() {
        $('.nav ul').slideToggle();

    });
    

    document.getElementById('close').onclick = function() {
        document.getElementById('modal').hidden = true;
    }

});