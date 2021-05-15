$(document).ready(function () {
    $(".image").on("click",ClickedImage)
})



function ClickedImage() {
    let clicked = $(this).val();
    $(this).css("width", "100%")
}
