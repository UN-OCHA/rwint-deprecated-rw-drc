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

        var m, mm = com.modestmaps;
        var baseLayers = [
            'djohnson.goog-map-muted',
            'reliefweb.un-borders-dark'
        ];
        var baseUrl = 'http://api.tiles.mapbox.com/v3/';
        var layers = window.layers = new Layers();

        var drawMap = function() {
            var om;

            if (RW._map) {
                $('#map-bg').remove();
                $('#map').attr('id','map-bg').after('<div id="map"></div>');
            }

            wax.tilejson(baseUrl + baseLayers.join(',') + (',') + layers.current() + '.jsonp',
            function(tilejson) {
                tilejson.minzoom = 4;
                tilejson.maxzoom = 7;
                m = new mm.Map('map',
                    new wax.mm.connector(tilejson), null, [
                        new mm.MouseHandler(),
                        new mm.TouchHandler()
                    ]
                );

                if (RW._map) {
                    m.coordinate = RW._map.coordinate;
                    m.draw();
                    // Link panning and zooming for old and new maps.
                    om = RW._map;
                    m.addCallback('panned', function(m, coords) { om.panBy(coords[0], coords[1]); });
                    m.addCallback('zoomed', function(m, offset) { om.zoomBy(offset); });
                } else {
                    m.setCenterZoom(new mm.Location(-0.5,26), 6);
                }

                wax.mm.legend(m, tilejson).appendTo(m.parent);
                wax.mm.interaction(m, tilejson);

                $('.zoomer').remove();
                wax.mm.zoomer(m, tilejson).appendTo($('#controls')[0]);
                wax.mm.bwdetect(m, {
                    auto: true,
                    png: '.png64?'
                });
                RW._map = m;
            });
        }

        var loading = function() {
            if ($("#loading").length != 0) {
                $('#map').append('<div id="loading" class="loading"></div>');
                var opts = {
                    lines: 16,
                    length: 5,
                    width: 3,
                    radius: 20,
                    color: '#202020',
                    speed: 2.2,
                    trail: 80,
                    shadow: false
                };
                var target = document.getElementById('loading');
                var spinner = new Spinner(opts).spin(target);
            }
        }

        // load sliders
        var refreshAll = _.debounce(function() {
            $('.layers li.active').length > 0 ? $('.dragdealer').fadeIn() : $('.dragdealer').fadeOut();
            drawMap();
        }, 100);

        (new Dragdealer('slider', {
            x: 0,
            speed: 10,
            steps: layers.length(),
            animationCallback: function(x) {
                 loading();
                var pos = Math.round(x * (layers.length() - 1));
                if (pos < 0 || pos >= layers.length()) return;
                layers.pos = pos;
                $('#slide-bar').html(layers.month());
                 _.once(refreshAll());
            },
            callback: function(x) {
                $('#loading').remove();
                refreshAll();
            }
        })).setValue(1);

        $('.layers li').click(function(e) {
            e.preventDefault();

            var el = $(e.currentTarget);
            var more = $('.more', el);

            if (el.hasClass('active')) {
                el.removeClass('active');
                more.slideUp(0);
            }
            else {
                el.addClass('active');
                more.slideDown(0);
            }

            $('.layers li').each(function(i, el) {
                layers.active[$(el).find('a').attr('id')] = $(el).hasClass('active');
            });

            refreshAll();
        });
    }

window.RW = RW;
})(window);
