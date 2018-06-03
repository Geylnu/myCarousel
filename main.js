let $allbuttons = creativeButton()
$('.viewPort').after($allbuttons)
setAutoplay(3000)

function creativeButton(){
    let $imgs = $('.wrapper>img')
    let $allbuttons = $('<div></div>').addClass('allButtons')
    for (let i=0;i < $imgs.length;i++){
        let $button = $(`<div></div>`).addClass('buttonBackGround')
        .on('click',buttonClick)
        let $buttonText = $(`<a>${i+1}</a>`).addClass('myButton')
        $button.append($buttonText)
        $allbuttons.append($button)
    }

    function buttonClick(e){
        $('.buttonBackGround').removeClass('active')
        $(e.currentTarget).addClass('active')
        let index = $(e.currentTarget).index()
        $('.wrapper').css(
            {
                transform : `translateX(${-index*314}px)`
            }
        )
    }
    return $allbuttons
}


function setAutoplay(time){
    let id = playFover(time)
    $('.carrouse').on('mouseenter',()=>{window.clearInterval(id)})
    .on('mouseleave',()=>{id=playFover(time)})
}

function playFover(time){
    let n = 1
    return window.setInterval(
        () =>{
            $allbuttons.children().eq(n%$allbuttons.children().length).trigger('click')
            n++
        }
        ,time
    )
}