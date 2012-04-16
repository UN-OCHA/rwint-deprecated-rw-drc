// This script is used alongside the `site.js` script.
// It functions as a lookup with helper functions the this.layerCtrl
// keys are based on the naming convention
// of the .mbtiles built for this project.

var Layers = function() {
    var year = year || '2011';
    this.active = {
      sec: true,
      lra: true,
      ret: false,
		  idp: true
    };
    this.layerCtrl = {
      '2011': [
        {
            'month': 'January',
            'layers': {
                'sec': '',
                'lra': '',
                'idp': 'idp-jan-11',
                'ret': 'ret-jan-11'
            }
        },
        {
            'month': 'February',
            'layers': {
              'sec': '',
              'lra': '',
              'idp': 'idp-jan-11',
              'ret': 'ret-jan-11'
            }
        },
        {
            'month': 'March',
            'layers': {
              'sec': '',
              'lra': '',
              'idp': 'idp-jan-11',
              'ret': 'ret-jan-11'
            }
        },
        {
            'month': 'April',
            'layers': {
              'sec': '',
              'lra': '',
              'idp': 'idp-apr-11',
              'ret': 'ret-apr-11'
            }
        },
        {
            'month': 'May',
            'layers': {
              'sec': 'sec-may-11',
              'lra': 'lra-may-11',
              'idp': 'idp-apr-11',
              'ret': 'ret-apr-11'
            }
        },
        {
            'month': 'June',
            'layers': {
              'sec': 'sec-jun-11',
              'lra': 'lra-jun-11',
              'idp': 'idp-apr-11',
              'ret': 'ret-apr-11'
            }
        },
        {
            'month': 'July',
            'layers': {
              'sec': 'sec-jul-11',
              'lra': 'lra-jul-11',
              'idp': 'idp-jul-11',
              'ret': 'ret-jul-11'
            }
        },
        {
            'month': 'August',
            'layers': {
              'sec': 'sec-aug-11',
              'lra': 'lra-aug-11',
              'idp': 'idp-jul-11',
              'ret': 'ret-jul-11'
            }
        },
        {
            'month': 'September',
            'layers': {
              'sec': 'sec-sep-11',
              'lra': 'lra-sep-11',
              'idp': 'idp-jul-11',
              'ret': 'ret-jul-11'
            }
        },
        {
            'month': 'October',
            'layers': {
              'sec': 'sec-oct-11',
              'lra': 'lra-oct-11',
              'idp': 'idp-jul-11',
              'ret': 'ret-jul-11'
            }
        },
        {
            'month': 'November',
            'layers': {
              'sec': 'sec-nov-11',
              'lra': 'lra-nov-11',
              'idp': 'idp-jul-11',
              'ret': 'ret-jul-11'
            }
        }
      ],
      '2010': [
        {
            'month': 'January',
            'layers': {
                'sec': '',
                'lra': '',
                'idp': '',
                'ret': ''
            }
        },
        {
            'month': 'February',
            'layers': {
                'sec': '',
                'lra': '',
                'idp': '',
                'ret': ''
            }
        },
        {
            'month': 'March',
            'layers': {
                'sec': '',
                'lra': '',
                'idp': '',
                'ret': ''
            }
        },
        {
            'month': 'April',
            'layers': {
                'sec': '',
                'lra': '',
                'idp': '',
                'ret': ''
            }
        },
        {
            'month': 'May',
            'layers': {
                'sec': '',
                'lra': '',
                'idp': '',
                'ret': ''
            }
        },
        {
            'month': 'June',
            'layers': {
                'sec': '',
                'lra': '',
                'idp': '',
                'ret': ''
            }
        },
        {
            'month': 'July',
            'layers': {
                'sec': '',
                'lra': '',
                'idp': '',
                'ret': ''
            }
        },
        {
            'month': 'August',
            'layers': {
                'sec': '',
                'lra': '',
                'idp': '',
                'ret': ''
            }
        },
        {
            'month': 'September',
            'layers': {
                'sec': '',
                'lra': '',
                'idp': '',
                'ret': ''
            }
        },
        {
            'month': 'October',
            'layers': {
                'sec': '',
                'lra': '',
                'idp': '',
                'ret': ''
            }
        },
        {
            'month': 'November',
            'layers': {
                'sec': '',
                'lra': '',
                'idp': '',
                'ret': ''
            }
        },
        {
            'month': 'December',
            'layers': {
                'sec': '',
                'lra': '',
                'idp': '',
                'ret': ''
            }
        }
      ]
    }
    this.pos = this.layerCtrl[year].length - 1;
};

// Returns a concatenated string of current layer results
Layers.prototype.current = function(year) {
    year = year || '2011';
    var filtered = _.compact(this.filter(this.layerCtrl[year][this.pos].layers));
    if (!this.layerCtrl[year][this.pos]) return;
    else if (filtered.length === 0) return;
    return filtered.join(',reliefweb.');
};

// Which layers are active?
// Returns result based on the filter method below
Layers.prototype.activeLayers = function(year) {
    year = year || '2011';
    return this.filter(this.layerCtrl[year][this.pos].layers);
};

// Run an iterator to return layers which are active
// based on the current state of the this.active object
Layers.prototype.filter = function(layers) {
    var active = this.active;
    return _.filter(layers, function(v, k) {
        return active[k];
    });
};

// Based on the position of the slider, return the current month
Layers.prototype.month = function(year) {
    year = year || '2011';
    if (!this.layerCtrl[year][this.pos]) return;
    return this.layerCtrl[year][this.pos].month;
};

// Return the length of the layerCtrl object
Layers.prototype.length = function(year) {
    year = year || '2011';
    return _.keys(this.layerCtrl[year]).length;
};
