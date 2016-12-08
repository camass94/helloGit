var s = document.getElementById('divDemo').style;
s.opacity = 1;
(function fade () {
    (s.opacity -= .1) < 0 ? s.display="none" : setTimeout(fade, 400)
})();