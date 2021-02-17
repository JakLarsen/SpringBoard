//1
console.log("Let's get ready to party with jQuery");

//2
$articleImages = $('article img');
$articleImages.addClass("image-center");

//3
lastP = $('p:last');
lastP.remove();

//4
randomFontSize = Math.floor(Math.random() * 101);
$title = $('#title');
$title.css({
    fontSize: `${randomFontSize}px`
})

//5
$('ol').append('<li>New list item</li>');

//6
$aside = $('aside');
$aside.empty();
$aside.text('Sorry for that list... it sucked!');

//7
$body = $('body');

$('.form-control').click(function(){
    $red = $('#red').val();
    $blue = $("#blue").val();
    $green = $("#green").val();
    rgbaVal = `rgba(${$red},${$blue},${$green},1)`;
    console.log(rgbaVal);
    // $('body').css({backgroundColor: 'rgba(200,100,255,1)'});
    $('body').css({backgroundColor: rgbaVal});
});

//8
$articleImages.click(function(){
    $articleImages.remove();
});