$(document).ready(function(){
    $.get('xml/content.xml', function(load) {
        $(load).find('web_project').each(function () {
            var $project = $(this);
            var name = $project.find('name').text();
            var description = $project.find('description').text();
            var image = $project.find('image').text();
            $('.websites_container').append(image);
            $('.websites_name_content').append('<h1 class="name_website text-center">' + name + '</h1>');
            $('.websites_description_content').append('<p class="description_website text-center">' + description + '</p>');
        });
        $(load).find('card_project').each(function () {
            var $project = $(this);
            var name = $project.find('name').text();
            var description = $project.find('description').text();
            var image = $project.find('image').text();
            $('.business_cards_container').append(image);
            $('.business_cards_name_content').append('<h1 class="name_website text-center">' + name + '</h1>');
            $('.business_cards_description_content').append('<p class="description_website text-center">' + description + '</div>');
        });

        $(load).find('poster_project').each(function () {
            var $project = $(this);
            var name = $project.find('name').text();
            var description = $project.find('description').text();
            var image = $project.find('image').text();
            /// $('.posters_container').append('<h1 class="name_website text-center">' + name + '</h1>');
            /// $('.posters_container').append(image);
            /// $('.posters_container').append('<p class="description_website text-center">' + description + '</div>');
        });
        $(load).find('flayer_project').each(function () {
            var $project = $(this);
            var name = $project.find('name').text();
            var description = $project.find('description').text();
            var image = $project.find('image').text();
            /// $('.flayers_container').append('<h1 class="name_website text-center">' + name + '</h1>');
            // $('.flayers_container').append(image);
            /// $('.flayers_container').append('<p class="description_website text-center">' + description + '</div>');
        });
        var images = $('.websites_container img');
        for(var i = 0; i < images.length; i+=7){
            images.slice(i,i+7).wrapAll("<div class='page'></div>")
        }
        var names = $('.websites_name_content > .name_website');
        for(var i = 0; i < names.length; i+=7){
            names.slice(i,i+7).wrapAll("<div class='page_names'></div>")
        }
        var description = $('.websites_description_content > .description_website');
        for(var i = 0; i < names.length; i+=7){
            description.slice(i,i+7).wrapAll("<div class='page_description'></div>")
        }

        $('.websites_name_content > .page_names').first().addClass('active_names');
        $('.websites_description_content > .page_description').first().addClass('active_descriptions');
        $('.page').first().addClass('active_page');
        $('.page').not('.active_page').hide();
        $(".active_page > .image_content").first().addClass('active_img');
        $(".active_img").next().addClass('side_img');
        $('.side_img').nextAll().addClass('small_img');
        $('.name_website').hide();
        $('.description_website').hide();
        var active_img_index = $('.active_img').index();
        $('.active_names > .name_website:eq('+active_img_index+')').delay(500).fadeIn('fast');
        $('.active_descriptions > .description_website:eq('+active_img_index+')').delay(500).fadeIn('fast');

        $('.button_next').on('click', function(){
            var active_img_index = $('.active_img').index();
            var page_last_img = $('.active_page > .image_content').last().index();
            var active_page_img_length = $('.active_page img').length;
            var active_page_index = $('.active_page').index();
            var last_page_index = $('.page').last().index();
            $('.active_img').prev().removeClass('side_img').addClass('small_img');
            $('.active_img').removeClass('active_img').addClass('side_img').next().removeClass('side_img').addClass('active_img');
            $('.active_img').next().removeClass('small_img').addClass('side_img');

            if(active_img_index  == page_last_img){
                $('.active_page').fadeOut('fast');
                $('.active_page').removeClass('active_page').next().addClass('active_page');
                $('.active_page').delay(500).fadeIn('fast');
                $(".active_page > .image_content").first().addClass('active_img').removeClass('small_img').removeClass('side_img');
                $(".active_img").next().addClass('side_img').removeClass('small_img');
                $('.side_img').nextAll().addClass('small_img');
                $('.active_names').removeClass('active_names').next().addClass('active_names');
                $('.active_descriptions').removeClass('active_descriptions').next().addClass('active_descriptions');
            }
            if (active_page_index == last_page_index && active_img_index + 1 == active_page_img_length ){
                $('.active_page').removeClass('active_page');
                $('.page').first().addClass('active_page').delay(500).fadeIn('fast');
                $(".active_page > .image_content").first().addClass('active_img').removeClass('small_img').removeClass('side_img');;
                $(".active_img").next().addClass('side_img').removeClass('small_img');
                $('.side_img').nextAll().addClass('small_img');
                $('.websites_name_content > .page_names').first().addClass('active_names');
                $('.websites_description_content > .page_description').first().addClass('active_descriptions');
            }
            var active_img_index2 = $('.active_img').index();
            $('.name_website').fadeOut('fast');
            $('.description_website').fadeOut('fast');
            $('.active_names > .name_website:eq('+active_img_index2+')').delay(500).fadeIn('fast');
            $('.active_descriptions > .description_website:eq('+active_img_index2+')').delay(500).fadeIn('fast');
        });
        $('.button_prev').on('click', function(){
            var active_img_index = $('.active_img').index();
            var page_first_img = $('.active_page > .image_content').first().index();
            var active_page_index = $('.active_page').index();
            var last_page_index = $('.page').last().index();
            var first_page_index = $('.page').first().index();
            $('.active_img').next().removeClass('side_img').addClass('small_img');
            $('.active_img').removeClass('active_img').addClass('side_img').prev().removeClass('small_img').removeClass('side_img').addClass('active_img');
            $('.active_img').prev().removeClass('small_img').addClass('side_img');
            $('.active_img').next().addClass('side_img').removeClass('small_img');

            if(active_img_index == page_first_img) {
                $('.active_page').fadeOut('fast');
                $('.active_page').removeClass('active_page').prev().addClass('active_page');
                $('.active_page').delay(500).fadeIn('fast');
                $(".active_page > .image_content").last().addClass('active_img').removeClass('small_img').removeClass('side_img');;
                $(".active_img").prev().removeClass('small_img').addClass('side_img');
                $('.side_img').prevAll().addClass('small_img');
                $('.active_names').removeClass('active_names').prev().addClass('active_names');
                $('.active_descriptions').removeClass('active_descriptions').prev().addClass('active_descriptions');
            }
            if (first_page_index == active_page_index && active_img_index == page_first_img) {

                $('.active_page').removeClass('active_page');
                $('.page').eq(last_page_index).addClass('active_page').delay(500).fadeIn('fast');
                $(".active_page > .image_content").last().addClass('active_img').removeClass('small_img');
                $(".active_img").prev().addClass('side_img').removeClass('small_img');
                $('.side_img').prevAll().addClass('small_img');
                $('.websites_name_content > .page_names').last().addClass('active_names');
                $('.websites_description_content > .page_description').last().addClass('active_descriptions');
            }
            var active_img_index2 = $('.active_img').index();
            $('.name_website').fadeOut('fast');
            $('.description_website').fadeOut('fast');
            $('.active_names > .name_website:eq('+active_img_index2+')').delay(500).fadeIn('fast');
            $('.active_descriptions > .description_website:eq('+active_img_index2+')').delay(500).fadeIn('fast');
        });

    });

    var images = $('.business_cards_container img');
        for(var i = 0; i < images.length; i+=7){
            images.slice(i,i+7).wrapAll("<div class='page'></div>")
        }
        var names = $('.websites_name_content > .name_website');
        for(var i = 0; i < names.length; i+=7){
            names.slice(i,i+7).wrapAll("<div class='page_names'></div>")
        }
        var description = $('.websites_description_content > .description_website');
        for(var i = 0; i < names.length; i+=7){
            description.slice(i,i+7).wrapAll("<div class='page_description'></div>")
        }

        $('.websites_name_content > .page_names').first().addClass('active_names');
        $('.websites_description_content > .page_description').first().addClass('active_descriptions');
        $('.page').first().addClass('active_page');
        $('.page').not('.active_page').hide();
        $(".active_page > .image_content").first().addClass('active_img');
        $(".active_img").next().addClass('side_img');
        $('.side_img').nextAll().addClass('small_img');
        $('.name_website').hide();
        $('.description_website').hide();
        var active_img_index = $('.active_img').index();
        $('.active_names > .name_website:eq('+active_img_index+')').delay(500).fadeIn('fast');
        $('.active_descriptions > .description_website:eq('+active_img_index+')').delay(500).fadeIn('fast');

        $('.button_next').on('click', function(){
            var active_img_index = $('.active_img').index();
            var page_last_img = $('.active_page > .image_content').last().index();
            var active_page_img_length = $('.active_page img').length;
            var active_page_index = $('.active_page').index();
            var last_page_index = $('.page').last().index();
            $('.active_img').prev().removeClass('side_img').addClass('small_img');
            $('.active_img').removeClass('active_img').addClass('side_img').next().removeClass('side_img').addClass('active_img');
            $('.active_img').next().removeClass('small_img').addClass('side_img');

            if(active_img_index  == page_last_img){
                $('.active_page').fadeOut('fast');
                $('.active_page').removeClass('active_page').next().addClass('active_page');
                $('.active_page').delay(500).fadeIn('fast');
                $(".active_page > .image_content").first().addClass('active_img').removeClass('small_img').removeClass('side_img');
                $(".active_img").next().addClass('side_img').removeClass('small_img');
                $('.side_img').nextAll().addClass('small_img');
                $('.active_names').removeClass('active_names').next().addClass('active_names');
                $('.active_descriptions').removeClass('active_descriptions').next().addClass('active_descriptions');
            }
            if (active_page_index == last_page_index && active_img_index + 1 == active_page_img_length ){
                $('.active_page').removeClass('active_page');
                $('.page').first().addClass('active_page').delay(500).fadeIn('fast');
                $(".active_page > .image_content").first().addClass('active_img').removeClass('small_img').removeClass('side_img');;
                $(".active_img").next().addClass('side_img').removeClass('small_img');
                $('.side_img').nextAll().addClass('small_img');
                $('.websites_name_content > .page_names').first().addClass('active_names');
                $('.websites_description_content > .page_description').first().addClass('active_descriptions');
            }
            var active_img_index2 = $('.active_img').index();
            $('.name_website').fadeOut('fast');
            $('.description_website').fadeOut('fast');
            $('.active_names > .name_website:eq('+active_img_index2+')').delay(500).fadeIn('fast');
            $('.active_descriptions > .description_website:eq('+active_img_index2+')').delay(500).fadeIn('fast');
        });
        $('.button_prev').on('click', function(){
            var active_img_index = $('.active_img').index();
            var page_first_img = $('.active_page > .image_content').first().index();
            var active_page_index = $('.active_page').index();
            var last_page_index = $('.page').last().index();
            var first_page_index = $('.page').first().index();
            $('.active_img').next().removeClass('side_img').addClass('small_img');
            $('.active_img').removeClass('active_img').addClass('side_img').prev().removeClass('small_img').removeClass('side_img').addClass('active_img');
            $('.active_img').prev().removeClass('small_img').addClass('side_img');
            $('.active_img').next().addClass('side_img').removeClass('small_img');

            if(active_img_index == page_first_img) {
                $('.active_page').fadeOut('fast');
                $('.active_page').removeClass('active_page').prev().addClass('active_page');
                $('.active_page').delay(500).fadeIn('fast');
                $(".active_page > .image_content").last().addClass('active_img').removeClass('small_img').removeClass('side_img');;
                $(".active_img").prev().removeClass('small_img').addClass('side_img');
                $('.side_img').prevAll().addClass('small_img');
                $('.active_names').removeClass('active_names').prev().addClass('active_names');
                $('.active_descriptions').removeClass('active_descriptions').prev().addClass('active_descriptions');
            }
            if (first_page_index == active_page_index && active_img_index == page_first_img) {

                $('.active_page').removeClass('active_page');
                $('.page').eq(last_page_index).addClass('active_page').delay(500).fadeIn('fast');
                $(".active_page > .image_content").last().addClass('active_img').removeClass('small_img');
                $(".active_img").prev().addClass('side_img').removeClass('small_img');
                $('.side_img').prevAll().addClass('small_img');
                $('.websites_name_content > .page_names').last().addClass('active_names');
                $('.websites_description_content > .page_description').last().addClass('active_descriptions');
            }
            var active_img_index2 = $('.active_img').index();
            $('.name_website').fadeOut('fast');
            $('.description_website').fadeOut('fast');
            $('.active_names > .name_website:eq('+active_img_index2+')').delay(500).fadeIn('fast');
            $('.active_descriptions > .description_website:eq('+active_img_index2+')').delay(500).fadeIn('fast');
        });

    });
});

