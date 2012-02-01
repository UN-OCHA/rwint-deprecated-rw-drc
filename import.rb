#!/usr/bin/env ruby

require 'rubygems'
require 'json'
require 'csv'

$st = Time.now
puts $st.strftime("Starting on %m/%d/%Y at %I:%M:%S%p")

# Write to yml
def write(filename, hash)
  File.open(filename, 'w') do |f|
    f.write(hash.to_json)
  end
end

# Read from csv
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
        # Convert every cell value to a string
        r[headers[col]] = cell.to_s
      end
    end
  end
  data
end

# Import countries.
provinces = {}
csv('data/lra_attacks.csv').each do |record|
  data = {'type' => 'provinces'}
  data['data'] = record || {}
  fn = "data/json/#{record['territory']}.json"
  write(fn, data)
end

write('data/json/lra_attacks.json', provinces)

$et = Time.now
puts $et.strftime("Ending on %m/%d/%Y at %I:%M:%S%p")
