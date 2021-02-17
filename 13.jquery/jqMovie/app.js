

$body = $('body');


function appendMovie(title, rating){

    console.log('Sent!')
    let wrap = $("<div id=#wrap'></div>");
    let t = $("<p id='del-t'></p>").text(title);
    let r = $("<p id='del-r'></p>").text(rating);
    let rdel = $("<button class='del-btn'></button>")
    wrap.append(t, r, rdel);
    $body.append(wrap);
   
    $('.del-btn').click(function(e){
        console.log('del-btn clicked');
        wrap.remove();
    })
}

$('#submit-btn').click(function(e){
    e.preventDefault();
    console.log('subimtted');
    $title = $('#title').val();
    $rating = $('#rating').val();

    appendMovie($title, $rating);
});