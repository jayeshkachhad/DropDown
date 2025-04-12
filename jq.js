$(document).ready(function () {

    // $(this).click(function () {
    //     console.log("Document clicked")
    // })
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

    $(".subMenuUl").click(function (event) {

        event.stopPropagation();

        // $(".tileHeading").click(false) // trial
        console.log("SubMenuUl Arroy Clicked");
        let lies = $(this).children(".subMenuUlsub")
        lies.children(".mini").hide()

        $(this).children("h6").children("img").css("rotate", "180deg");
        // lies.find("img").hide()
        lies.toggle("fast")


    })


    $('.subMenuUl > .subMenuUlsub').click(function (event) {
        // Prevent the click from propagating to the parent tile heading
        event.stopPropagation();

        // Toggle the visibility of the nested mini-menu items

        if ($(this).find('.mini').is(":visible")) {
            $(this).find('.mini').hide("fast")
            $(this).children("h6").children("img").css("rotate", "0deg");

            // $(this).children("img").hide()
        }
        else {
            $(".mini").slideUp("fast")
            $(".subMenuUl").children("h6").children("img").css("rotate", "180deg");
            // $(this).parent().$(".subMenuUlsub > h6 > img").css("rotate", "0deg");
            // $(this).find("img").css("rotate", "0deg");
            $(this).siblings().find("img").css("rotate", "0deg");


            // $(this).children().siblings("img").css("rotate", "0deg");
            $(this).children("h6").children("img").css("rotate", "180deg");
            $(this).find('.mini').slideDown("fast")
        }

        // $(this).find('.mini').slideToggle("fast");

        // Rotate the arrow icon of the submenu to indicate open/close state
        // $(this).find('.subMenuUlArr').toggleClass('rotate');
    });

})