## Mapping Conflict in the DRC


This documentation is divded into two parts. The first section covers how to set up github and fork the project, and explains the site architecture with file descriptions. The second section backs up to data processing and map design by providing links to tools to download, and docs for working with SQLite and Tilemill. 

##Github and Site Architecture

###Setting up Github
 - [Create an account](https://github.com/signup/free)
 - [Set up Git](http://help.github.com/mac-set-up-git/)
 - [Forking a repository](http://help.github.com/fork-a-repo/)


### Forking the project
To use this project as a starting point, [fork the repository](http://help.github.com/fork-a-repo). This will create a new copy of the project on github. Make changes by setting up a local repo, and then commit/push changes to github.

###Files
-----

    _includes/     Javascript and css files.
    _layouts/      Major page templates.
    _posts/        Content. Data, sources, about.
    _site/         The static site generated by Jekyll.
    data/          Csv and json files of data for drawer.
    fonts/         Fonts.
    images/        Images.
    tilemill/      Internews-media tilemill project.
    404.html       Custom 404 page - only works with gh-pages.
    CNAME          CNAME record. See http://pages.github.com under 'Custom domains' to see how this works with github pages
    README.md      This file.
    _config.yml    Jekyll configuration file.
    404.html       Custom 404 page - only works with gh-pages.
    import.rb      An import script designed to split the data from csv into indivdual .json files per province
    index.html     Home page.
    site.css       Aggregated site css.
    site.js        Aggregated site scripts.


###Jekyll
The site uses Jekyll, a simple, logic aware, static site generator. In a nutshell you build a site with all the logic and source files you need and Jekyll creates a static copy of the website in a '_site/' directory. Note that you do not touch the contents of this directory. You make any additions or changes to the files outside of this.

Make sure you have [Xcode](https://developer.apple.com/technologies/tools/) installed before installing Jekyll. This is available for free in the Apple App store.  Once this is complete you should be able to run: 

- `gem install jekyll`

If this doesn't work, read documentation [available here](https://github.com/mojombo/jekyll/wiki/install) about updating your ruby packages.

Once jekyll is installed, and you have downloaded the project, from terminal, navigate into the directory the project is in and type 'jekyll'. Locally, the site can be viewed at `http://0.0.0.0:4000/index.html` in any browser after it has been generated for the first time. This allows you to make local changes that are automatically reflected in your local version of the site, as long as jekyll is running in your terminal. To stop jekyll, type 'command c'.

####Site Configuration
`_config.yml` sets up the default configuration for jekyll when reading all files. As seen below, it allows you to format the url, and allows for the exclusion of unnecessary files that jekyll doesn't need to generate.

		auto: true
		server: true
		exclude:
		  - README.md
		  - import.rb
		  - tilemill
		permalink: /:title
		baseurl: /internews-media

####Adding new pages
Jekyll allows for easy referencing and adding logic for other pages in the header of each new page that you create. For our use case, in `0200-01-02-about.html`, the header includes several options:

		title: About the Data
		category: about
		tags: about
		layout: pages

We reference posts with 'tags' and 'category' to control their display from the template pages located in '_layouts/'. The logic contained in these template files uses Liquid. You can learn more about the [Liquid Templating System](https://github.com/shopify/liquid/wiki/liquid-for-designers) for more information on creating relationships between files in the `_site` directory.

####Naming conventions
Jekyll has a default chronological pagination system. Posts are ordered such that the most *recent* post appears first, so we created fake dates to ensure hierarchy between the 'About' and 'Sources' links in the _posts directory.

    hierarchy    file name
    --------     ---------
     1           0200-01-02-about.html
     2           0200-01-01-data.html
     2       	 0200-01-01-sources.html

###Notes
Where something requires explanation there are inline notes in the code. See line [1-16 in site.js](https://github.com/developmentseed/internews-media/blob/gh-pages/_includes/js/site.js#L1-16)


##Data Processing
[This tutorial](http://mapbox.com/tilemill/docs/tutorials/SQLite-work/) walks through turning data sources into SQLite files. This requires downloading [Quantum GIS](www.qgis.org), and [Tilemill](www.tilemill.com).

Qgis is a powerful tool for working with geographic files, but for right now we just want it to convert data formats like csvs and shapefiles into SQLite databases. 

SQLite databases are the best tool for sorting data in Tilemill. SQLite lets you change the query on the data whenever you like, to find a different angle on your data. It is also an easy way to join databases with geographic information to those without geographic information, in the `attach db` field of the `add SQLite layer` in Tilemill. This process is outlined in the same [tutorial](http://mapbox.com/tilemill/docs/tutorials/SQLite-work/) as above.

For example, with the LRA attacks and security incidents against humanitarian workers, I saved the original files as csvs, then imported them into QGIS. Then I saved the layers as SQLite databases. 

Since I want to aggregate my LRA incidents by the district level, I need points that correspond to each district. So I looked at the admin2 shapefile from the `cod_boundaries`, which has district information.  In QGIS I add a vector layer and open up this `admin2.shp` file. This opens up polygons, but I don't want to join my LRA or security incidents to polygons, since I was display them as events by location. 

To turn the polygons into centroids, I went to `vector, geometry tools, polygons to centroids.' Then I right-clicked on the shapefile and saved the layer as a SQLite database, and set the CRS (map projection) to google mercator, since this is what Tilemill by default uses. 

Now you should have two SQLite databases, one for LRA attacks, and one for admin2 centroids. In Tilemill you will go to `add a layer`, choose `SQLite` and open up the admin2 centroids file. Then in the `attach DB` field, you will navigate to your LRA attacks file. The join between these two databases happens in the query field, and looks similar to this: 

            (select *,
	
			count(unique_id) as num_attacks, 
			sum(ppl_killed) as ppl_killed, 
			sum(infants_kidnapped) as infants_kidnapped,  
			sum(adults_kidnapped) as adults_kidnapped

			  from  `admin3_centroids` a join `lra_attack` b
			  on b.territory=a.nom
			  group by month, territory
			)
			
The asterisk means select all, and the following rows are counting or adding data so that as we aggregate by district, we won't lose individual information about each attack. This yield a table with a row for each territory of each month in the data with aggregated attacks, people killed, and people kidnapped. 

##Map Design 

This comes much easier, as it follows a css-type like language called carto. All of the basics and more advanced options of styling your data can be found in the [mapbox.com/help](http://mapbox.com/help), starting with [styling data](http://mapbox.com/tilemill/docs/crashcourse/styling/) section. 
