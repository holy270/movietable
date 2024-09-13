

$(".btns>li").click(function(){
  $(this).addClass("on")
  $(this).siblings().removeClass("on")
  
  let a=$(this).attr('data-filter'); 
  //$(this).attr('속성명','속성값');
  //속성값 호출시(변수안에 넣어줌)-->a=$(선택자).attr('속성명');
  $(".contents").isotope({filter:a});




})

$(".contents").isotope();
$(".fancybox").fancybox();