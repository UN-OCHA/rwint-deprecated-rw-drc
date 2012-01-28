//  The site uses a page specific singleton to
//  limit scripts to executing on pages that are dependent on
//  existing DOM elements.
//
//  To create a new method write follow the pattern below by
//  writing something like `internews.PAGENAME = function() {};`
//
//  To trigger the code on a page simply run the function on page load.
//  You can execute the desired function from any layout: - _layouts/TEMPLATE.html or
//  specific page: - _posts/POST.html like so:
//
//      <script>
//          window.onload = function () {
//              RW.PAGENAME();
//          });
//      </script>
//
//  See the root `_includes/map-interactive.html` page as example.

(function(context) {
var RW = RW || {};

    RW.interactive = function() {

        var m;
        var mm = com.modestmaps;
        var baseLayers = [
            'djohnson.goog-map-muted',
            'reliefweb.un-borders-dark'
        ];
        var baseUrl = 'http://api.tiles.mapbox.com/v3/';
        var layers = window.layers = new Layers();

        wax.tilejson(baseUrl + baseLayers.join(',') + (',') + layers.current() + '.jsonp',
        function(tilejson) {
            tilejson.minzoom = 2;
            tilejson.maxzoom = 7;
            m = new mm.Map('map',
                new wax.mm.connector(tilejson), null, [
                    new mm.MouseHandler(),
                    new mm.TouchHandler()
                ]
            );
            m.setCenterZoom(new mm.Location( - 0.5, 26), 6);
            wax.mm.legend(m, tilejson).appendTo(m.parent);
            wax.mm.interaction(m, tilejson);
            wax.mm.zoomer(m, tilejson).appendTo($('#controls')[0]);
            wax.mm.bwdetect(m, {
                auto: true,
                png: '.png64?'
            });
        });

        function refreshMap() {
            wax.tilejson(baseUrl + baseLayers.join(',') + (',') + layers.current() + '.jsonp',
            function(tilejson) {
                tilejson.minzoom = 2;
                tilejson.maxzoom = 7;
                m.setProvider(new wax.mm.connector(tilejson));
            });
        }

        // load sliders
        var refreshAll = _.debounce(function() {
            refreshMap();
        }, 200);
        (new Dragdealer('slider', {
            x: 0,
            steps: layers.length(),
            animationCallback: function(x, y) {
                var pos = Math.round(x * (layers.length() - 1));
                if (pos < 0 || pos >= layers.length()) return;
                layers.pos = pos;
                $('#slide-bar').html(layers.month());
                refreshAll();
            }
        })).setValue(1);

            $('.layers li').click(function(e) {
                var el = $(e.currentTarget);
                var more = $('.more', el);
                if (el.hasClass('active')) {
                    el.removeClass('active');
                    more.slideUp('fast');
                }
                else {
                    el.addClass('active');
                    more.slideDown('fast');
                }
                $('.layers li').each(function(i, el) {
                    layers.active[$(el).attr('id')] = $(el).hasClass('active');
                });
                refreshAll();
                return false;
        });
    }

window.RW = RW;
})(window);
