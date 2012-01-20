var Layers = function() {
    this.active = {
        sec: true,
        lra: true,
        idp: true,
        ret: true
    };
    this.layerCtrl = [
    {
        'month': 'Jan 2010',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-mar-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Feb 2010',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-mar-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Mar 2010',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-mar-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Apr 2010',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-mar-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'May 2010',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-mar-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Jun 2010',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-mar-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Jul 2010',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-mar-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Aug 2010',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-mar-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Sep 2010',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-mar-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Oct 2010',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-mar-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Nov 2010',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-nov-10',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Dec 2010',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-dec-10',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Jan 2011',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-dec-10',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Feb 2011',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-dec-10',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Mar 2011',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-mar-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Apr 2011',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-mar-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'May 2011',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-mar-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Jun 2011',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-jun-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Jul 2011',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-jun-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Aug 2011',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-jun-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Sep 2011',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-sep-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Oct 2011',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-sep-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    },
    {
        'month': 'Nov 2011',
        'layers': {
            'sec': 'djohnson.sec-all-jan11-2',
            'lra': 'djohnson.sec-all-jan11-2',
            'idp': 'djohnson.idp-nov-11',
            'ret': 'djohnson.jan-mar-11-returnees'
        }
    }
    ];
    this.pos = this.layerCtrl.length - 1;
};

Layers.prototype.current = function() {
    if (!this.layerCtrl[this.pos]) return;
    return this.filter(this.layerCtrl[this.pos].layers).join(',');
};

Layers.prototype.filter = function(layers) {
    var active = this.active;
    return _.filter(layers, function(v, k) {
        return active[k];
    });
};

Layers.prototype.month = function() {
    if (!this.layerCtrl[this.pos]) return;
    return this.layerCtrl[this.pos].month;
};

Layers.prototype.length = function() {
    return this.layerCtrl.length;
};
