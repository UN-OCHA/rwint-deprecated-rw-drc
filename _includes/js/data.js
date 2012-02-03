var Layers = function() {
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
            'idp': 'djohnson.idp-jan-11',
            'ret': 'djohnson.ret-jan-11'
        }
    },
    {
        'month': 'Feb 2011',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': 'djohnson.idp-jan-11',
            'ret': 'djohnson.ret-jan-11'
        }
    },
    {
        'month': 'Mar 2011',
        'layers': {
            'sec': '',
            'lra': '',
            'idp': 'djohnson.idp-jan-11',
			'ret': 'djohnson.ret-jan-11'
        }
    },
    {
        'month': 'Apr 2011',
        'layers': {
            'sec': '',
    	    'lra': '',
            'idp': 'djohnson.idp-apr-11',
			'ret': 'djohnson.ret-apr-11'
        }
    },
    {
        'month': 'May 2011',
        'layers': {
            'sec': 'djohnson.sec-may-11',
    	    'lra': 'djohnson.lra-may-11',
            'idp': 'djohnson.idp-apr-11',
			'ret': 'djohnson.ret-apr-11'
        }
    },
    {
		'month': 'Jun 2011',
        'layers': {
        	'sec': 'djohnson.sec-jun-11',
    	    'lra': 'djohnson.lra-jun-11',
            'idp': 'djohnson.idp-apr-11',
			'ret': 'djohnson.ret-apr-11'
        }
    },
    {
        'month': 'Jul 2011',
        'layers': {
            'sec': 'djohnson.sec-jul-11',
	        'lra': 'djohnson.lra-jul-11',
            'idp': 'djohnson.idp-jul-11',
			'ret': 'djohnson.ret-jul-11'
        }
    },
    {
        'month': 'Aug 2011',
        'layers': {
            'sec': 'djohnson.sec-aug-11',
    	    'lra': 'djohnson.lra-aug-11',
            'idp': 'djohnson.idp-jul-11',
			'ret': 'djohnson.ret-jul-11'
        }
    },
    {
        'month': 'Sep 2011',
        'layers': {
            'sec': 'djohnson.sec-sep-11',
	        'lra': 'djohnson.lra-sep-11',
            'idp': 'djohnson.idp-jul-11',
			'ret': 'djohnson.ret-jul-11'
        }
    },
    {
        'month': 'Oct 2011',
        'layers': {
            'sec': 'djohnson.sec-oct-11',
	        'lra': 'djohnson.lra-oct-11',
            'idp': 'djohnson.idp-jul-11',
			'ret': 'djohnson.ret-jul-11'
        }
    },
    {
        'month': 'Nov 2011',
        'layers': {
            'sec': 'djohnson.sec-nov-11',
            'lra': 'djohnson.lra-nov-11',
            'idp': 'djohnson.idp-jul-11',
            'ret': 'djohnson.ret-jul-11'
        }
    }
    ];
    this.pos = this.layerCtrl.length - 1;
};

Layers.prototype.current = function() {
    if (!this.layerCtrl[this.pos]) return;
    return this.filter(this.layerCtrl[this.pos].layers).join(',');
};

Layers.prototype.month = function() {
    if (!this.layerCtrl[this.pos]) return;
    return this.layerCtrl[this.pos].month;
};

Layers.prototype.length = function() {
    return this.layerCtrl.length;
};
