$(document).ready(function () {
    // console.log("Jq Hreer");

    $("#mainDrop").click(function () {
        $(".mainOps").toggle("fast")
    })


    $(".tileHeading").click(function () {
        const para = $(this).siblings("p")
        const du = $(this).children("img")

        if (para.is(":visible")) {
            para.hide("fast");
            du.css({ "rotate": "0deg" })

        } else {
            $("p").hide();
            $("img").css({ "rotate": "0deg" })

            para.show("fast")
            du.css({ "rotate": "180deg" })
        }
    })

})