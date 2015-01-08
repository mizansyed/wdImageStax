/*!
 * jQuery WD ImageStax Plugin v0.7(beta)
 * 
 *
 * Copyright 2014, Mizan Syed, With Digital
 * Licensed under the Apache License, Version 2.0
 * Read licence.txt and notice.txt for info
 */

;
(function($) {
    $.fn.wdImageStax = function(options) {
        var defaults = {
            height: false,
            width: false,
            list: false,
            centreImages: false,
            index: 1200,
            degree: 20,
            degreePattern: "default",
            animateSpeed: 500,
            swingTop: 0.4,
            swingLeft: 0.6,
            evaluateOnWindowResize: true,
            wrapperStyles: {},
            imageStyles: {}
        };

        var settings = $.extend(true, {}, defaults, options);
        var context = {};

        var initialise = function(el) {
            if (settings.height == false) {
                settings.height = el.innerHeight()
            }
            if (settings.width == false) {
                settings.width = el.innerWidth()
            }
            if (settings.list == "") {
                settings.list = false
            }
            if (settings.animateSpeed > 1000) {
                settings.animateSpeed = 1000
            }
            if (settings.evaluateOnWindowResize == true) {
                $(window).resize(reEvaluate);
            }
        }

        var getListElements = function() {
            var ul_obj = (settings.list === false) ? context.wrapper.find("ul") : "ul" + settings.list;
            var ul_obj_li = context.wrapper.find(ul_obj).find('li');
            context.ul = ul_obj;
            context.list = ul_obj_li;
        }

        var positionItems = function() {
            context.list_size = context.list.length;
            context.rotateToIncrement = getDegreeIncrement();
            setListAttribute(true);
        }

        var getDegreeIncrement = function() {
            if (settings.degree < 10) {
                settings.degree = 20;
            }
            var deg = settings.degree * 2;
            return Math.ceil(deg / context.list.length);
        }

        var randomDegreeValue = function(){
            if (settings.degree < 10) {
                settings.degree = 20;
            }

            var minDegree = -settings.degree;
            var maxDegree = settings.degree;
            var randomDegree = Math.floor(Math.random() * (maxDegree - minDegree + 1)) + minDegree;
            if (randomDegree == context.randomDegree){
                randomDegreeValue()
            }else{
                context.randomDegree = randomDegree
                return randomDegree;
            }
        }

        var setWrapperHeightWidth = function(el) {
            el.css(settings.wrapperStyles);
            el.css({
                width: settings.width,
                height: settings.height
            })
        }

        var setImagePosition = function(el) {
            el.css('position', 'absolute');
        }

        var revise = function() {
            var body = $("body");
            body.css("overflow", "visible");

            var img_element = $(this);

            img_element.animate({
                    "left": "+=" + (settings.width * settings.swingLeft),
                    "top": "-" + (settings.height * settings.swingTop)
                }, settings.animateSpeed, "easeOutBack", function() {
                    img_element.css("z-index", settings.index - context.list.length)
                })
                .animate({
                    left: (settings.centreImages == true) ? (context.wrapper.width() - el.width()) / 2 : 0,
                    top: (settings.centreImages == true) ? (context.wrapper.height() - el.height()) / 2 : 0
                }, {
                    duration: settings.animateSpeed,
                    easing: "easeOutBack",
                    complete: function() {
                        body.css("overflow", "visible");
                    }
                });

            //move the image li to the back
            li = img_element.parent();
            //add to the beginning
            context.ul.prepend(li);
            //get new order of list
            getListElements();
            //set list attribute including reindexing img
            setListAttribute(false);


        }

        var setListAttribute = function(attachEvent) {
            var rotateTo = context.rotateToIncrement;

            context.list.each(function(index) {
                var img_element = $(this).find('img');
                var img_height = img_element.height();
                var img_width = img_element.width();
                var wrapper_resize = false;
                setImagePosition(img_element);

                if (settings.width < img_width) {
                    settings.width = img_width;
                    wrapper_resize = true;
                }

                if (settings.height < img_height) {
                    settings.height = img_height;
                    wrapper_resize = true;
                }

                //if there are img dimension is larger than wrapper div, adjust wrapper div
                if (wrapper_resize == true) {
                    setWrapperHeightWidth(context.wrapper);
                }

                if (settings.degreePattern == "random"){
                    rotateTo = randomDegreeValue();
                }

                // top item should not be rotated
                if (index == context.list.length - 1) {
                    rotateTo = 0
                }

                styliseItems(img_element, settings.index++, rotateTo);
                if (attachEvent == true) {
                    img_element.on("click", revise);
                }
                rotateTo += context.rotateToIncrement;
            });
        }

        var styliseItems = function(el, index, degree) {
            el.css(settings.imageStyles);
            el.css({
                left: (settings.centreImages == true) ? (context.wrapper.width() - el.width()) / 2 : 0,
                top: (settings.centreImages == true) ? (context.wrapper.height() - el.height()) / 2 : 0
            });

            el.css('position', 'absolute');
            el.css('z-index', index);
            el.css('transform', 'rotate( ' + degree + 'deg)');
            el.css('-ms-transform', 'rotate( ' + degree + 'deg)');
            el.css('-moz-transform', 'rotate( ' + degree + 'deg)');
            el.css('-webkit-transform', 'rotate( ' + degree + 'deg)');
            el.css('-o-transform', 'rotate( ' + degree + 'deg)');
        }

        var reEvaluate = function() {
            settings.height = context.wrapper.innerHeight();
            settings.width = context.wrapper.innerWidth();
            setListAttribute(false);
        }

        return this.each(function() {
            var obj = context.wrapper = $(this);
            initialise(obj);
            setWrapperHeightWidth(obj);
            getListElements();
            positionItems();

        });

    }
})(jQuery);