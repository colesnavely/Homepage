$(".dark-btn").click(
    function(){
        $(".container").toggleClass("dark");
        $(".box").toggleClass("dark")
    }
);

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin")
    }
);

$(".reveal-btn").click(
    function(){
        // $(".giant").addClass("reveal")
        // $(".giant").css("display","block")
        $(".giant").show();
        $(".reveal-btn").hide();
    }
);

$( ".draggable" ).draggable();

