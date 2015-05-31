$(document).ready(function () {
    var xmlDoc = "xml/nature.xml";
    loadSlide();

    /* Hamburger button function */
    $('.hamburger').click(function () {
        $('.menu').slideToggle('slide');
        $('body').mouseup(function (e) {
            var subject = $("#menu-element");
            if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
                $('.menu').slideUp(500);
            }
        });
    });

    /*Change category buttons */
    $('.nature').on('click', function () {
        xmlDoc = 'xml/nature.xml';
        $('.title,.image,.description').fadeOut(1000).remove();
        loadSlide();
        $('.menu').slideUp(500);
    });
    $('.beaches').on('click', function () {
        xmlDoc = 'xml/beaches.xml';
        $('.title,.image,.description').fadeOut(1000).remove();
        loadSlide();
        $('.menu').slideUp(500);
    });
    $('.animals').on('click', function () {
        xmlDoc = 'xml/animals.xml';
        $('.title,.image,.description').fadeOut(1000).remove();
        loadSlide();
        $('.menu').slideUp(500);
    });




    /* Function Load Slide*/
    function loadSlide() {
        $.get(xmlDoc, function (d) {
            $(d).find('slide:first').each(function () {
                var $slide = $(this);
                var title = $slide.find('title').text();
                var description = $slide.find('description').text();
                var image_url = $slide.find('image_url').text();
                $('.image_container').append('<img class="image" src="' + image_url + '"></img>');
                $('.image_container').prepend('<h1 class="title">' + title + '</h1>');
                $('.title').after('<p class="description">' + description + '</p>');
                $('.title,.image,.description').hide();
                $('.title,.image,.description').fadeIn(1000);
            });

            $(d).find('articles').each(function () {
                var $article = $(this);
                var i = 0;
                /* Right button function */
                $('.right_button').on('click', function () {
                    var check_length = $article.find('title').length;
                    i++;
                    if (i > check_length - 1) {
                        i = 0;
                    }
                    removeCur();
                    nextSlide();
                });
                function nextSlide() {
                    var title_next = $article.find('title:eq(' + i + ')').text();
                    var description_next = $article.find('description:eq(' + i + ')').text();
                    var image_next = $article.find('image_url:eq(' + i + ')').text();

                    $('.title,.image,.description').remove();
                    $(".image_container").prepend('<h1 class="title">' + title_next + '</h1>');
                    $('.image_container').append('<img class="image" src="' + image_next + '"></img>');
                    $('.title').after('<p class="description">' + description_next + '</p>');
                    $('.title,.image,.description').hide();
                    $('.title,.image,.description').fadeIn(1000);
                }

                /* Left button function */
                $('.left_button').on('click', function () {
                    var check_length = $article.find('title').length;

                    i--;
                    if (i < 0) {
                        i = check_length - 1;
                    }
                    removeCur();
                    prevSlide();

                });
                function removeCur() {
                    $('.title,.image,.description').fadeOut(1000).remove();
                }

                function prevSlide() {
                    var title_next = $article.find('title:eq(' + i + ')').text();
                    var description_next = $article.find('description:eq(' + i + ')').text();
                    var image_next = $article.find('image_url:eq(' + i + ')').text();
                    $('.image_container').append('<img class="image" src="' + image_next + '"></img>').hide();
                    $(".image_container").prepend('<h1 class="title">' + title_next + '</h1>');
                    $('.title').after('<p class="description">' + description_next + '</p>');

                    $('.image').fadeIn(1000);
                }
            });
        });
    };
});




