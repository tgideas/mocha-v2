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
        },

        addClass : function (className) {
            if (!className) return this
            let classes = className.split(' ')
            return this.each((index, item) => {
              item.classList.add.apply(item.classList, classes)
            })
        }

    };
    
    /* 
     * init slider
     * require mow.js
     */
    util.slider = function (p) {
        var componentJS = 'mow.js',
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
                for (var i = 0; i < moNavLi.length; i++){
                        moNavLi[i].addEventListener('click', function (n) {
                            return function () {
                                slider.to(n);                                
                                var xx = Array.prototype.slice.call(moNavLi);
                                xx.forEach(function (e) { e.className = '' });
                                moNavLi[n].className = 'mo-slider-cur';
                            }
                        }(i), false);
                }
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