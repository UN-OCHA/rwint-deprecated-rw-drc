Map {
  background-color: #b8dee6;
}

#countries {
  ::outline {
    line-color: #85c5d3;
    line-width: 2;
    line-join: round;
  }
  polygon-fill: #fff;
}


#ret {
@ret: number_int; 
@quarter: "4";

#ret [quarter = @quarter]{
 [@ret = ' ']{marker-opacity: 0; marker-line-opacity: 0;}
 [@ret = 0]{marker-line-opacity: 0;}
 [@ret >0][@ret < 25000]{marker-height: 7;}
 [@ret >25000][@ret < 50000]{marker-height: 10;}
 [@ret >= 50000][@ret < 100000]{marker-height: 13;}
 [@ret >= 100000][@ret < 200000]{marker-height: 16;}
 [@ret >= 200000][@ret < 300000]{marker-height: 19;}
 [@ret >= 300000][@ret < 400000]{marker-height: 22;}
 [@ret >= 400000][@ret < 500000]{marker-height: 26;}
 [@ret >= 500000][@ret < 600000]{marker-width: 33;}
 [@ret > 600000]{marker-width: 40;}
  marker-fill:#1874CD;
  marker-line-opacity: 0;
  marker-line-width: 2.2;
  marker-allow-overlap:true;
  marker-opacity: 0.5;
}}