var mo = (function () {
    var fn = {}, util = {};
    fn = {
        jsLoader: function (url, callback, options) {
            options = options || {};
            var head = document.getElementsByTagName('head')[0] || document.documentElement,
                script = document.createElement('script'),
                done = false;
            script.src = url;
            if (options.charset) {
                controller
                script.charset = options.charset;
            }
            script.onerror = script.onload = script.onreadystatechange = function () {
                if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                    done = true;
                    if (callback) {
                        callback();
                    }
                    script.onerror = script.onload = script.onreadystatechange = null;
                    head.removeChild(script);
                }
            };
            head.insertBefore(script, head.firstChild);
        }
    };
    
    /* 
     * init slider
     * require mow.js
     */
    util.slider = function (p) {
        var componentJS = '//mocha.oa.com/v2/definitions/comm/basic/js/mow.js',
            selector = p.selector,
            componentConfig = p.moConfig || {
                index: 0,
                effect: 'fade',
                direction: 'y',
                autoplay: 0,
                speed: 500,
                ease: 'linear'
            };
        function init() {
            var slider = mow.swiper(selector, componentConfig);
            var moPrev = document.querySelector(selector + " .mo-slider-prev"),
                moNext = document.querySelector(selector + " .mo-slider-next"),
                moNav = document.querySelector(selector + " .mo-slider-ctrl");
            if (moPrev) {
                moPrev.addEventListener('click', function () { slider.prev(); }, false);
            }
            if (moNext) {
                moNext.addEventListener('click', function () {slider.next();}, false);
            }
            if(moNav){
                var moNavLi = moNav.getElementsByTagName("li");
                var moNavLiii = Array.prototype.slice.call(moNavLi);
                for (var i = 0; i < moNavLi.length; i++){
                        moNavLi[i].addEventListener('click', function (n) {
                            return function () {
                                slider.to(n);                                
                                moNavLiii.forEach(function (e) { e.className = '' });
                                moNavLi[n].className = 'mo-slider-cur';
                            }
                        }(i), false);
                }
                // update slider cur index
                slider.on("afterchange", function (toIndex,beforeIndex) {
                    moNavLiii.forEach(function (e) { e.className = '' });
                    moNavLi[beforeIndex].className = 'mo-slider-cur';
                })
            }
        }
        (typeof mow !== "object") ? fn.jsLoader(componentJS, function(){init()}) : init()        
    }
    

    return {
        slider : function (p) {
            util.slider(p)
        }
    }
})();