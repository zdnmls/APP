$(function () {
    $(".banner").scrollBanner({
        images : [
            {src:"img/15.jpg",href:"#"},
            {src:"img/banner6.jpg",href:"#"},
            {src:"img/banner2.jpg",href:"#"},
            {src:"img/banner3.jpg",href:"#"},
            {src:"img/banner4.jpg",href:"#"}
        ],
        scrollTime:3000,
        bannerHeight:"150px",
        iconColor: "#FFFFFF",
        iconHoverColor : "#c9c41d",
        iconPosition : "center"
    });
})