// <![CDATA[
$(function() {

$('.content_resize,.header_menu').css({"-webkit-box-shadow": "1px 1px 3px #3a3a3a", "-moz-box-shadow":"1px 1px 3px #3a3a3a", "box-shadow":"1px 1px 5px #3a3a3a"});

/*$('.content_box,.centercol,.btn a span').css({"border-radius":"5px", "-moz-border-radius":"5px", "-webkit-border-radius":"5px"});
*/
/*
$('#contactform input,#contactform textarea').css({"border-radius":"4px", "-moz-border-radius":"4px", "-webkit-border-radius":"4px"});
*/

});
	
$(function () {
	var arr_links = location.href.split('/');
	var length = arr_links.length;
	$('.menu li').each(function () {
		if ($(this).children('a').attr('href') == arr_links[(length-1)]) {
			$(this).addClass('active');
			$(this).children('a').addClass('active');
			$(this).parents('li').addClass('active');
			$(this).parents('li').children('a').addClass('active');
		}
	})
	$(function(){
		$("a[rel^='prettyPhoto']").prettyPhoto({
			social_tools: false,
		});
	});


	$().UItoTop();
	
	$("#gallery, #gallery-imgs").preloader({not_preloader:'img.h, img.r_plus, img.r_plus_overlay, .showcase-slide img, .flickr img, .sidebar_flickr img, #now_slider img'});

    $("#ticker").tweet({
        username: "twitter", // define your twitter username
        page: 1,
        avatar_size: 16, // avatar size in px
        count: 20, // how many tweets to show
        loading_text: "loading ..."
    }).bind("loaded", function () {
        var ul = $(this).find(".tweet_list");
        var ticker = function () {
                setTimeout(function () {
                    ul.find('li:first').animate({
                        marginTop: '-4em'
                    }, 500, function () {
                        $(this).detach().appendTo(ul).removeAttr('style');
                    });
                    ticker();
                }, 8000); // duration before next tick (4000 = 4 secs)
            };
        ticker();
    });

});
// ]]>
