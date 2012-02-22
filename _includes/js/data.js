// This script is used alongside the `site.js` script.
// It functions as a lookup with helper functions the this.layerCtrl
// keys are based on the naming convention
// of the .mbtiles built for this project.

var Layers = function() {
    this.active = {
        sec: true,
        lra: true,
        ret: true,
		idp: true
    };
    this.layerCtrl = [
    {
        'month': 'Jan 2010',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': '',
            'ret': ''
        }
    },
    {
        'month': 'Feb 2010',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': '',
            'ret': ''
        }
    },
    {
        'month': 'Mar 2010',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': '',
            'ret': ''
        }
    },
    {
        'month': 'Apr 2010',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': '',
            'ret': ''
        }
    },
    {
        'month': 'May 2010',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': '',
            'ret': ''
        }
    },
    {
        'month': 'Jun 2010',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': '',
            'ret': ''
        }
    },
    {
        'month': 'Jul 2010',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': '',
            'ret': ''
        }
    },
    {
        'month': 'Aug 2010',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': '',
            'ret': ''
        }
    },
    {
        'month': 'Sep 2010',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': '',
            'ret': ''
        }
    },
    {
        'month': 'Oct 2010',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': '',
            'ret': ''
        }
    },
    {
        'month': 'Nov 2010',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': '',
            'ret': ''
        }
    },
    {
        'month': 'Dec 2010',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': '',
            'ret': ''
        }
    },
    {
        'month': 'Jan 2011',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': 'idp-jan-11',
            'ret': 'ret-jan-11'
        }
    },
    {
        'month': 'Feb 2011',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': 'idp-jan-11',
            'ret': 'ret-jan-11'
        }
    },
    {
        'month': 'Mar 2011',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': 'idp-jan-11',
			'ret': 'ret-jan-11'
        }
    },
    {
        'month': 'Apr 2011',
        'layers': {
            'sec': '',
    	    'lra': '',
            'idp': 'idp-apr-11',
			'ret': 'ret-apr-11'
        }
    },
    {
        'month': 'May 2011',
        'layers': {
            'sec': 'sec-may-11',
    	    'lra': 'lra-may-11',
            'idp': 'idp-apr-11',
			'ret': 'ret-apr-11'
        }
    },
    {
		'month': 'Jun 2011',
        'layers': {
        	'sec': 'sec-jun-11',
    	    'lra': 'lra-jun-11',
            'idp': 'idp-apr-11',
			'ret': 'ret-apr-11'
        }
    },
    {
        'month': 'Jul 2011',
        'layers': {
            'sec': 'sec-jul-11',
	        'lra': 'lra-jul-11',
            'idp': 'idp-jul-11',
			'ret': 'ret-jul-11'
        }
    },
    {
        'month': 'Aug 2011',
        'layers': {
            'sec': 'sec-aug-11',
    	    'lra': 'lra-aug-11',
            'idp': 'idp-jul-11',
			'ret': 'ret-jul-11'
        }
    },
    {
        'month': 'Sep 2011',
        'layers': {
            'sec': 'sec-sep-11',
	        'lra': 'lra-sep-11',
            'idp': 'idp-jul-11',
			'ret': 'ret-jul-11'
        }
    },
    {
        'month': 'Oct 2011',
        'layers': {
            'sec': 'sec-oct-11',
	        'lra': 'lra-oct-11',
            'idp': 'idp-jul-11',
			'ret': 'ret-jul-11'
        }
    },
    {
        'month': 'Nov 2011',
        'layers': {
            'sec': 'sec-nov-11',
            'lra': 'lra-nov-11',
            'idp': 'idp-jul-11',
            'ret': 'ret-jul-11'
        }
    }
    ];
    this.pos = this.layerCtrl.length - 1;
};

// Returns a concatenated string of current layer results
Layers.prototype.current = function() {
    var filtered = _.compact(this.filter(this.layerCtrl[this.pos].layers));
    if (!this.layerCtrl[this.pos]) return;
    else if (filtered.length === 0) return;
    return filtered.join(',djohnson.');
};

// Which layers are active?
// Returns result based on the filter method below
Layers.prototype.activeLayers = function() {
    return this.filter(this.layerCtrl[this.pos].layers);
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
Layers.prototype.month = function() {
    if (!this.layerCtrl[this.pos]) return;
    return this.layerCtrl[this.pos].month;
};

// Return the length of the layerCtrl object
Layers.prototype.length = function() {
    return this.layerCtrl.length;
};
