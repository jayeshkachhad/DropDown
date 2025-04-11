$(document).ready(function () {
    // console.log("Jq Hreer");

    // $("#mainDrop").click(function () {
    //     $(".mainOps").toggle("fast")
    // })
    $("ul").hide();
    $(".subMenuLi").hide();
    $(".mini").hide();

    $(".tileHeading").click(function () {
        const para = $(this).siblings("ul")
        const du = $(this).children("img")

        if (para.is(":visible")) {
            para.hide("fast");
            du.css({ "rotate": "0deg" })


        } else {
            $("ul").hide();
            $("img").css({ "rotate": "0deg" })

            para.show("fast")
            du.css({ "rotate": "180deg" })
        }
    })

    $(".subMenuUlArr").click(function () {
        // $(".tileHeading").click(false) // trial
        console.log("SubMenuUl Arroy Clicked");
        let lies = $(this).siblings(".subMenuLi")
        lies.toggle("fast")


    })

    $(".subMenuLiArr").click(function () {
        // $(".subMenuUl").click(false) // trial
        // $(".subMenuUl").css({ "pointer-events": "none" })
        console.log("subMenuLi Arrow Clicked");
        // let minies = $(this).siblings(".mini");
        // minies.toggle("fast");
        // $(".mini").show();
        $(this).siblings(".mini").show()
    })

})