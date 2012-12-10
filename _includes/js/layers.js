// This script is used alongside the `site.js` script.
// It functions as a lookup with helper functions the this.layerCtrl
// keys are based on the naming convention
// of the .mbtiles built for this project.

var Layers = function() {
    var year = year || '2012';
    this.active = {
      sec: true,
      lra: true,
      ret: false,
		  idp: true
    };
    this.layerCtrl = {
      '2012': [
		{
          'month': 'January',
          'layers': {
              'sec': 'sec-jan-12',
              'lra': 'lra-jan-12',
              'idp': 'idp-jan-12',
              'ret': 'ret-jan-12'
          }
      },
      {
          'month': 'February',
          'layers': {
            'sec': 'sec-feb-12',
            'lra': 'lra-feb-12',
            'idp': 'idp-jan-12',
            'ret': 'ret-jan-12'
          }
      },
      {
          'month': 'March',
          'layers': {
            'sec': 'sec-mar-12',
            'lra': 'lra-mar-12',
            'idp': 'idp-jan-12',
            'ret': 'ret-jan-12'
          }
      },
      {
          'month': 'April',
          'layers': {
            'sec': 'sec-apr-12',
            'lra': 'lra-apr-12',
            'idp': 'idp-apr-12',
            'ret': 'ret-apr-12'
          }
      },
      {
          'month': 'May',
          'layers': {
            'sec': 'sec-may-12',
            'lra': 'lra-may-12',
            'idp': 'idp-apr-12',
            'ret': 'ret-apr-12'
          }
      },
      {
          'month': 'June',
          'layers': {
            'sec': 'sec-jun-12',
            'lra': 'lra-jun-12',
            'idp': 'idp-apr-12',
            'ret': 'ret-apr-12'
          }
      },
      {
          'month': 'July',
          'layers': {
            'sec': 'sec-jul-12',
            'lra': 'lra-jul-12',
            'idp': 'idp-jul-12',
            'ret': 'ret-jul-12'
          }
      },
      {
          'month': 'August',
          'layers': {
            'sec': 'sec-aug-12',
            'lra': 'lra-aug-12',
            'idp': 'idp-jul-12',
            'ret': 'ret-jul-12'
          }
      },
      {
          'month': 'September',
          'layers': {
            'sec': 'sec-sep-12',
            'lra': 'lra-sep-12',
            'idp': 'idp-jul-12',
            'ret': 'ret-jul-12'
          }
      },
      {
          'month': 'October',
          'layers': {
            'sec': 'sec-oct-12',
            'lra': 'lra-oct-12',
            'idp': 'idp-oct-12',
            'ret': 'ret-oct-12'
          }
      },
      {
          'month': 'November',
          'layers': {
            'sec': 'sec-nov-12',
            'lra': 'lra-nov-12',
            'idp': 'idp-oct-12',
            'ret': 'ret-oct-12'
          }
      }
	  ],
      '2011': [
        {
            'month': 'January',
            'layers': {
                'sec': 'sec-jan-11',
                'lra': 'lra-jan-11',
                'idp': 'idp-jan-11',
                'ret': 'ret-jan-11'
            }
        },
        {
            'month': 'February',
            'layers': {
              'sec': 'sec-feb-11',
              'lra': 'lra-feb-11',
              'idp': 'idp-jan-11',
              'ret': 'ret-jan-11'
            }
        },
        {
            'month': 'March',
            'layers': {
              'sec': 'sec-mar-11',
              'lra': 'lra-mar-11',
              'idp': 'idp-jan-11',
              'ret': 'ret-jan-11'
            }
        },
        {
            'month': 'April',
            'layers': {
              'sec': 'sec-apr-11',
              'lra': 'lra-apr-11',
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
              'idp': 'idp-oct-11',
              'ret': 'ret-oct-11'
            }
        },
        {
            'month': 'November',
            'layers': {
              'sec': 'sec-nov-11',
              'lra': 'lra-nov-11',
              'idp': 'idp-oct-11',
              'ret': 'ret-oct-11'
            }
        },
		{
            'month': 'December',
            'layers': {
              'sec': 'sec-dec-11',
              'lra': 'lra-dec-11',
              'idp': 'idp-oct-11',
              'ret': 'ret-oct-11'
            }
        }
      ],
      '2010': [
        {
            'month': 'January',
            'layers': {
                'sec': 'sec-jan-10',
                'lra': 'lra-jan-10',
                'idp': 'idp-jan-10',
                'ret': 'ret-jan-10'
            }
        },
        {
            'month': 'February',
            'layers': {
                'sec': 'sec-feb-10',
                'lra': 'lra-feb-10',
                'idp': 'idp-jan-10',
                'ret': 'ret-jan-10'
            }
        },
        {
            'month': 'March',
            'layers': {
                'sec': 'sec-mar-10',
                'lra': 'lra-mar-10',
                'idp': 'idp-jan-10',
                'ret': 'ret-jan-10'
            }
        },
        {
            'month': 'April',
            'layers': {
                'sec': 'sec-apr-10',
                'lra': 'lra-apr-10',
                'idp': 'idp-apr-10',
                'ret': 'ret-apr-10'
            }
        },
        {
            'month': 'May',
            'layers': {
                'sec': 'sec-may-10',
                'lra': 'lra-may-10',
                'idp': 'idp-apr-10',
                'ret': 'ret-apr-10'
            }
        },
        {
            'month': 'June',
            'layers': {
                'sec': 'sec-jun-10',
                'lra': 'lra-jun-10',
                'idp': 'idp-apr-10',
                'ret': 'ret-apr-10'
            }
        },
        {
            'month': 'July',
            'layers': {
                'sec': 'sec-jul-10',
                'lra': 'lra-jul-10',
                'idp': 'idp-jul-10',
                'ret': 'ret-jul-10'
            }
        },
        {
            'month': 'August',
            'layers': {
                'sec': 'sec-aug-10',
                'lra': 'lra-aug-10',
                'idp': 'idp-jul-10',
                'ret': 'ret-jul-10'
            }
        },
        {
            'month': 'September',
            'layers': {
                'sec': 'sec-sep-10',
                'lra': 'lra-sep-10',
                'idp': 'idp-jul-10',
                'ret': 'ret-jul-10'
            }
        },
        {
            'month': 'October',
            'layers': {
                'sec': 'sec-oct-10',
                'lra': 'lra-oct-10',
                'idp': 'idp-oct-10',
                'ret': 'ret-oct-10'
            }
        },
        {
            'month': 'November',
            'layers': {
                'sec': 'sec-nov-10',
                'lra': 'lra-nov-10',
                'idp': 'idp-oct-10',
                'ret': 'ret-oct-10'
            }
        },
        {
            'month': 'December',
            'layers': {
                'sec': 'sec-dec-10',
                'lra': 'lra-dec-10',
                'idp': 'idp-oct-10',
                'ret': 'ret-oct-10'
            }
        }
      ]
    }
    this.pos = this.layerCtrl[year].length - 1;
};

// Returns a concatenated string of current layer results
Layers.prototype.current = function(year) {
    year = year || '2012';
    var filtered = _.compact(this.filter(this.layerCtrl[year][this.pos].layers));
    if (!this.layerCtrl[year][this.pos]) return;
    else if (filtered.length === 0) return;
    return filtered.join(',reliefweb.');
};

// Which layers are active?
// Returns result based on the filter method below
Layers.prototype.activeLayers = function(year) {
    year = year || '2012';
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
    year = year || '2012';
    if (!this.layerCtrl[year][this.pos]) return;
    return this.layerCtrl[year][this.pos].month;
};

// Return the length of the layerCtrl object
Layers.prototype.length = function(year) {
    year = year || '2012';
    return _.keys(this.layerCtrl[year]).length;
};
