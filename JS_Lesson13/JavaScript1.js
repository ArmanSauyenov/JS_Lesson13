//Практика
//1. Сделать блок, шириной 200 на 200 пикселей, с фоновой заливкой.
//Сделать две кнопки - для отображения и скрытия блока.
//Сделать копку, по нажатию на которую блок отобразить и сразу
//после скрывается(анимация скрытия и отображения медленная 1 - 3 секунды)
//По умолчанию при загрузке старницы скрыть блок.
//Сделать еще одну кнопку, по нажатию на которую весь блок становится прозрачным на случайную величину.

//Сделать поле ввода и кнопку, в поле ввода вводится число, по нажатию на кнопку, блок становится на введенное
//число шире.
//И если блок скрыт, он показывается с анимацией(любой).

//Сделать кнопку, по нажатию на которую на всех созданных кнопках меняется размер текста до 22px с анимацией.
$('#block').hide()
$('#showhide').on('click', function () {
    $('#block').show('fast');
    $('#block').hide(2000, function () {
        $(this).find('#block').hide('slow');
    })
})

$('#show').on('click', function () {
    $('#block').show();
})

$('#hide').on('click', function () {
    $('#block').hide();
})

$('#fadeit').on('click', function () {
    $('#block').show();
    $('#block').fadeTo(1000, Math.random(), 'linear', function () {
    });
})

$('#inputbtn').on('click', function () {
    $('#block').show();
        $('#block').animate({
            width: $('input').val(),
            height: $('input').val()
        }, 1000, 'linear')
})

$('#sizechange').on('click', function () {
    $('button').animate({
       'font-size':'+22px'
    });
})


$('#block2').css('position', 'absolute');


$('#block2').on('dblclick', function () {
    console.log('123')

    move()
})

function move() {
        $('#block2').animate({
            left: Math.random() *500,
            top: Math.random() * 500
        }, function () {
            move()
        })

    
}

$('#block2').on('click', function () {
    $('#block2').stop();
})