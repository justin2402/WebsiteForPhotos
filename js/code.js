$(document).ready(function () {
    $(".image").on("click",ClickedImage)
})



function ClickedImage() {
    let clicked = $(this).data("touched");
    if (clicked === false){
    $(this).css("width", "100%")
        $(this).data("touched", true)
    }
    else if(clicked === true){
        let widthSize = $(this).data("width")
        $(this).css("width", widthSize)
        $(this).data("touched", false)
    }

}
