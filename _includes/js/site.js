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
            'mapbox.world-blank-bright',
            'djohnson.africa_borders'
        ];
        var baseUrl = 'http://api.tiles.mapbox.com/v3/';
        var layers = window.layers = new Layers();

        var drawMap = function() {
            var om;

            if (RW._map) {
                $('#map-bg').remove();
                $('#map').attr('id','map-bg').after('<div id="map"></div>');
            }

            wax.tilejson(baseUrl + baseLayers.join(',') + (',djohnson.') + layers.current() + '.jsonp',
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
                    m.setCenterZoom(new mm.Location(-1.642,29.582), 6);
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

        // load sliders
        var refreshAll = _.debounce(function() {
            $('.layers li.active').length > 0 ? $('.dragdealer').fadeIn('fast') : $('.dragdealer').fadeOut('fast');
            // Refresh the table with new data
            // TODO Check to see that the table DOM structure is there first.
            var provinceTemplate = "<tr><% _.each(provinces, function(name) { %> <td><%= name %></td> <% }); %></tr>";
            var provinceNamesOutput = _.template(provinceTemplate, {provinces : ['Sud Kivu', 'Orientale', 'Katanga', 'Equateur', 'Maniema', 'Nord Kivu']});
            $('table#drc-monthly-data tbody').append(provinceNamesOutput);

            _.each(layers.activeLayers(), function(layer) {
                // $.getJSON('data/json/idp.json', function(data) {

                //});
            });

            drawMap();
        }, 100);

        (new Dragdealer('slider', {
            x: 0,
            speed: 10,
            steps: layers.length(),
            animationCallback: function(x) {
                var pos = Math.round(x * (layers.length() - 1));
                if (pos < 0 || pos >= layers.length()) return;
                layers.pos = pos;
                $('#slide-bar').html(layers.month());
                 _.once(refreshAll());
            },
            callback: function(x) {
                refreshAll();
            }
        })).setValue(1);

        $('.layers li a').click(function(e) {
            $(window).resize();
            e.preventDefault();

            var el = $(e.currentTarget).parent();
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

        $('a.close').click(function(e) {
            e.preventDefault();
            $('.modal, #overlay').removeClass('active');
        });

        // Trigger close buttons with the escape key
        $(document.documentElement).keydown(function (e) {
            if (e.keyCode === 27) { $('a.close').trigger('click'); }
        });

        $('a.share').click(function(e){
            e.preventDefault();
            $('.modal, #overlay').addClass('active');

            var shareContent = $('.share-content');
            var twitter = 'http://twitter.com/intent/tweet?status=' +
            'Mapping Conflict in the DRC' + encodeURIComponent(window.location);
            var facebook = 'https://www.facebook.com/sharer.php?t=Relief%20Web%20|%20Mapping%20Conflict%20in%20the%20DRC&u=' +
            encodeURIComponent(window.location);

            document.getElementById('twitter').href = twitter;
            document.getElementById('facebook').href = facebook;

            var center = m.pointLocation(new mm.Point(m.dimensions.x/2,m.dimensions.y/2));
            var embedUrl = 'http://api.tiles.mapbox.com/v2/' + baseLayers.join(',') + (',') + layers.current() + '/mm/zoompan,tooltips,legend,bwdetect.html#' + m.coordinate.zoom +
                            '/' + center.lat + '/' + center.lon;
            $('#embed-code-field textarea').attr('value', '<iframe src="' + embedUrl +
                '" frameborder="0" width="650" height="500"></iframe>');

            $('#embed-code')[0].tabindex = 0;
            $('#embed-code')[0].select();
        });
    }

window.RW = RW;
})(window);
