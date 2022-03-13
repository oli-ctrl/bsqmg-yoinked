window.plugins = {};
window.plugins.cachables = {
    name: 'cachables',
    onContentUpdated(v) {
        $('.NO-CACHE').attr('src',function () { return $(this).attr('src') + "&a=" + Math.random() });
    }
};

window.onload = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    console.log(queryString)

    if (!urlParams.has("nl")) {
        var keys = {37: 1, 38: 1, 39: 1, 40: 1};

        function preventDefault(e) {
            e.preventDefault();
        }

        function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        }

// modern Chrome requires { passive: false } when adding event
        var supportsPassive = false;
        try {
            window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
                get: function () {
                    supportsPassive = true;
                }
            }));
        } catch (e) {
        }

        var wheelOpt = supportsPassive ? {passive: false} : false;
        var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

        var style = document.getElementById("scrollbar-manager");

// call this to Disable
        function disableScroll() {
            style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
            window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
            window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
            window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
            window.addEventListener('keydown', preventDefaultForScrollKeys, false);
        }

// call this to Enable
        function enableScroll() {
            style.innerHTML = ``;
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
            window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
            window.removeEventListener('touchmove', preventDefault, wheelOpt);
            window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
        }

        function hideLoader() {
            enableScroll();
            $(".loader").fadeOut(300, function () {
                $(this).remove();
            });
        }

        setTimeout(hideLoader, 2000); //wait for page load PLUS two seconds.
    } else {
        $(".loader").remove();
    }
}



if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('assets/js/sw.js')
}
