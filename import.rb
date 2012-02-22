#!/usr/bin/env ruby

# The purpose of this script is to run an export function on each of
# the .csv files located in the data directory. The script returns
# a formated .json file with names based on the id of the map layers.
# See `_includes/js/data.js` for reference. A returned json file looks
# something like this:
#
#   {
#     "Orientale": {
#       "month": "Feb-11",
#       "value": 27
#     }
#   }
#
# A province name is followed by the month and the number of occurance's
# an attack occurred during that month.

require 'rubygems'
require 'json'
require 'csv'

$st = Time.now
puts $st.strftime("Starting on %m/%d/%Y at %I:%M:%S%p")


# write to json
def write(filename, hash)
  File.open(filename, 'w') do |f|
    f.write(hash.to_json)
  end
end

#read from csv
def csv(filename)
  data = []
  headers = []
  CSV.read(filename).each_with_index do |row, index|
    if index == 0
      row.each do |cell|
        headers.push(cell.to_s)
      end
    else
      r = {}
      data.push(r)
      row.each_with_index do |cell, col|
        if /[+-]?(\d+)(\.\d+)/ =~ cell
          r[headers[col]] = cell.to_f
        elsif /^[+-]?(\d+)$/ =~ cell
          r[headers[col]] = cell.to_i
        elsif cell.to_s != ''
          r[headers[col]] = cell.to_s
        end
      end
    end
  end
  data
end

# Import LRA Attack Data
# Calculate the total of times a month shows up to give us our num_attacks count
lra = {}
csv('data/lra.csv').each do |record|
  month = record['month'].downcase
  if !lra[month]
    lra[month] = {}
  end

  id = record['province']
  if lra[month].has_key?(id)
    lra[month][id]['value'] = lra[month][id]['value'] + 1
  else
    lra[month][id] = {}
    lra[month][id]['month'] = record['month']
    lra[month][id]['value'] = 1
  end
end

lra.each do |k, v|
  write("data/json/lra-#{k}.json", v)
end

# Import Security Event Data
# Calculate the total of times a province shows up in security incidences 
sec = {}
csv('data/sec.csv').each do |record|
  month = record['month'].downcase
  if !sec[month]
    sec[month] = {}
  end

  id = record['province']
  if sec.has_key?(id)
    sec[month][id]['value'] = sec[month][id]['value'] + 1
    sec[month][id]['month'] = record['month']
  else
    sec[month][id] = {}
    sec[month][id]['month'] = record['month']
    sec[month][id]['value'] = 1
  end
end

sec.each do |k, v|
  write("data/json/sec-#{k}.json", v)
end

# Import Returnee Data
ret = {}
csv('data/ret.csv').each do |record|
  month = record['key'].downcase
  if !ret[month]
    ret[month] = {}
  end

  id = record['province']
  if !record['text'].nil?
    if ret.has_key?(id)
      ret[month][id]['value'] = record['text']
    else
      ret[month][id] = {}
      ret[month][id]['value'] = record['text']
    end
  end
end

ret.each do |k, v|
  write("data/json/#{k}.json", v)
end

# Import Displaced Data
idp = {}
csv('data/idp.csv').each do |record|
  month = record['key'].downcase
  if !idp[month]
    idp[month] = {}
  end

  id = record['province']
  if !record['text'].nil?
    if idp.has_key?(id)
      idp[month][id]['value'] = record['text']
    else
      idp[month][id] = {}
      idp[month][id]['value'] = record['text']
    end
  end
end

idp.each do |k, v|
  write("data/json/#{k}.json", v)
end

$et = Time.now
puts $et.strftime("Ending on %m/%d/%Y at %I:%M:%S%p")
