
var m;
var mm = com.modestmaps;
var baselayer = 'mapbox.natural-earth-1';
var borders = 'reliefweb.un-borders-dark';
var security = 'djohnson.sec-all-jan11-2';
var IDP = 'djohnson.idp-mar-11';
var activeLayer = '';
var layers = [
        baselayer,
        borders,
         ]; 

activelayers = [
	'djohnson.idp-2008-2',
	'djohnson.sec-all-jan11-2',
	'djohnson.jan-mar-11-returnees'
	     ];

 
wax.tilejson('http://api.tiles.mapbox.com/v2/' + layers + '.jsonp', function(tilejson) {
	  tilejson.minzoom = 2;
        tilejson.maxzoom = 7;
	    m = new mm.Map('map', new wax.mm.connector(tilejson), null, [
	        new mm.MouseHandler(),
	        new mm.TouchHandler()
	        ]
	    );
	    m.setCenterZoom(new mm.Location(-1,24), 6);
	    tilejson.attribution = 'Powered by open source <a href="http://tilemill.com" target="_blank"> TileMill</a> ';
	    wax.mm.legend(m, tilejson).appendTo(m.parent);
	    wax.mm.interaction(m, tilejson);
	    wax.mm.zoomer(m, tilejson).appendTo($('#controls')[0]);
	    wax.mm.bwdetect(m, {
	        auto: true,
	        png: '.png64?'
	    });
	});

function refreshMap(layers) {
    wax.tilejson('http://api.tiles.mapbox.com/v2/' + layers + '.jsonp', function (tilejson) {
        tilejson.minzoom = 2;
        tilejson.maxzoom = 7;
        m.setProvider(new wax.mm.connector(tilejson));
        $('.wax-legends').remove();
        wax.mm.legend(m, tilejson).appendTo(m.parent);
        interaction.remove();
        wax.mm.interaction(m, tilejson);
    });
}

  // Embed Code
    $('a.share').click(function(e){
        e.preventDefault();
        $('#share, #overlay').addClass('active');

        var twitter = 'http://twitter.com/intent/tweet?status=' +
        '1,000 Days Interactive Map ' + encodeURIComponent(window.location);
        var facebook = 'https://www.facebook.com/sharer.php?t=1000%20Days%20Interactive%20Map&u=' +
        encodeURIComponent(window.location);

        document.getElementById('twitter').href = twitter;
        document.getElementById('facebook').href = facebook;

        var center = m.pointLocation(new mm.Point(m.dimensions.x/2,m.dimensions.y/2));
        var embedUrl = 'http://api.tiles.mapbox.com/v2/' + layers + '/mm/zoompan,tooltips,legend,bwdetect.html#' + m.coordinate.zoom +
                        '/' + center.lat + '/' + center.lon;
        $('#embed-code-field textarea').attr('value', '<iframe src="' + embedUrl +
            '" frameborder="0" width="650" height="500"></iframe>');

        $('#embed-code')[0].tabindex = 0;
        $('#embed-code')[0].select();
    });

    // Trigger close buttons with the escape key
    $(document.documentElement).keydown(function (e) {
        if (e.keyCode === 27) { $('a.close').trigger('click'); }
    });

    $('a.close').click(function (e) {
        e.preventDefault();
        $('#share, #overlay').removeClass('active');
    });

// TODO: Change this
$(document).ready(function () {

    // Layer Selection
    $('ul.layers li a').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            $('ul.layers li a').removeClass('active');
            $(this).addClass('active');
            var activeLayer = $(this).attr('data-layer');
            layers = [
               baselayer,
		        activeLayer,
		        borders,
		        nationalPointData,
		        subNationalPointData
            ];
            refreshMap(layers);
        }
    });
 
});

/*-----------------
Slider
-----------------*/
$(function () {
    
    var refreshMap = function(label) {
        // todo
    };
    
    var refreshData = function(label) {
        // todo
    };

    // load sliders
    var refreshAll = _.debounce(function(pos) {
        console.log("TODO: refresh all data for " + pos)
        refreshMap(pos);
        refreshData(pos);
    }, 200);
    var famineSlider = new Dragdealer('slider', {
        x: 0,
        steps: 48,
        animationCallback: function(x, y) {
            var pos = Math.round(x * 48);
            dataCtrl[pos] && $('#slide-bar').html(dataCtrl[pos].label);
            dataCtrl[pos] && refreshAll(pos);
        }
    });
 /*
  
  // Define default map settings
  var mm = com.modestmaps,
    step = 0,
    mFaminePrev,
    mFamineCur,
    mFamineProj,
    mDrought10,
    mDrought11,
    mConflictbg,
    mConflict,
    mCommit,
    overlays;
*/

  

 
  function step1() {
    step = 1;
    $('#slider').show()
    $('#drought-slider').hide()

    //reset the slider
    famineSlider.setValue(1);

    // Famine maps 1 of 3

    $('#map')
      .append('<div id="mFamineProj" class="map" style="z-index: 1;"></div>')
      .each(function (){

        var layers = ['mapbox.world-blank-light',
              'usaid-horn.hoa-foodsecurity-oct-dec-nolimited',
              'mapbox.world-borders-dark'].join(','),
            tilejson = tj(layers);

        mFamineProj = new mm.Map('mFamineProj',
          new wax.mm.connector(tilejson),
          null,
          null
        );

        // Define center point
        mFamineProj.setCenterZoom(new mm.Location(5.5, 43), 5);

        //Bandwidth optimization
        wax.mm.bwdetect(mFamineProj, {png: '.png32'});
      });


    
    // Famine maps 3 of 3
    $('div#mapbox')
      .append('<div id="mFaminePrev" class="map" style="z-index: 3;"></div>')
      .each(function (){

       
        mFaminePrev = new mm.Map('mFaminePrev',
          new wax.mm.connector(tilejson),
          null,
          [
            new mm.MouseHandler(),
            new mm.TouchHandler()
          ]
        );
        
      
      });
  } // End step1



  // Load first step
  step1();
});
