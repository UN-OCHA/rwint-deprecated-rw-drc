$(function() {
    var m;
    var mm = com.modestmaps;
    var activeLayer = '';
    var baseLayers = [
        'mapbox.natural-earth-1',
        'reliefweb.un-borders-dark'
    ];
    var baseUrl = 'http://api.tiles.mapbox.com/v3/';
    var layers = window.layers = new Layers();

    wax.tilejson(baseUrl + baseLayers.join(',') + (',') + layers.last() + '.jsonp',
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

    function refreshMap(time) {
        wax.tilejson(baseUrl + baseLayers.join(',') + (',') + layers.at(time) + '.jsonp',
        function(tilejson) {
            tilejson.minzoom = 2;
            tilejson.maxzoom = 7;
            m.setProvider(new wax.mm.connector(tilejson));
        });
    }

    // load sliders
    var refreshAll = _.debounce(function(pos) {
        console.log("TODO: refresh all data for " + pos)
        refreshMap(pos);
    }, 200);
    new Dragdealer('slider', {
        x: 0,
        steps: layers.length(),
        animationCallback: function(x, y) {
            var pos = Math.round(x * (layers.length() - 1));
            layers.at(pos) && $('#slide-bar').html(layers.month(pos));
            refreshAll(pos);
        }

    });
});
