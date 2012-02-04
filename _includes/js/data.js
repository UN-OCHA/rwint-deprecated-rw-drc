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

Layers.prototype.current = function() {
    if (!this.layerCtrl[this.pos]) return;
    else if (this.filter(this.layerCtrl[this.pos].layers).length === 0) return;
    return this.filter(this.layerCtrl[this.pos].layers).join(',djohnson.');
};

Layers.prototype.activeLayers = function() {
    return this.filter(this.layerCtrl[this.pos].layers);
};

Layers.prototype.filter = function(layers) {
    return _.compact(layers);
};

Layers.prototype.month = function() {
    if (!this.layerCtrl[this.pos]) return;
    return this.layerCtrl[this.pos].month;
};

Layers.prototype.length = function() {
    return this.layerCtrl.length;
};
