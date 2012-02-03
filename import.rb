#!/usr/bin/env ruby

require 'rubygems'
require 'json'
require 'csv'

# add array math functions
class Array; def sum; inject( nil ) { |sum,x| sum ? sum+x : x }; end; end
class Array; def mean(den); (sum.to_f / (size * den) * den); end; end

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
# Calculate the total of the column `num_attacks`
lra = {}
csv('data/lra_attacks.csv').each do |record|
  lra[record['unique_id']] = {}
  lra[record['unique_id']]['month'] = record['month']
  lra[record['unique_id']]['province'] = record['province']
  lra[record['unique_id']]['num_attacks'] = record['num_attacks']
end

write('data/json/lra.json', lra)

# Import Security Event Data
# Calculate the total of times a province shows up in security incidences 
sec = {}
csv('data/security_events.csv').each do |record|
  sec[record['unique_id']] = {}
  sec[record['unique_id']]['month'] = record['month']
  sec[record['unique_id']]['province'] = record['province']
end

write('data/json/sec.json', sec)

# Import Displaced and Returnee Data
idp = {}
ret = {}

csv('data/idp_ret_synthesis_2011.csv').each do |record|
  idp[record['province']] = {}
  idp[record['province']]['displaced_q1_text'] = record['displaced_q1_text']
  idp[record['province']]['displaced_q2_text'] = record['displaced_q2_text ']
  idp[record['province']]['displaced_q3_text'] = record['displaced_q3_text']

  ret[record['province']] = {}
  ret[record['province']]['ret_q1_text'] = record['ret_q1_text']
  ret[record['province']]['ret_q2_text'] = record['ret_q2_text']
  ret[record['province']]['ret_q3_text'] = record['ret_q3_text']
end

write('data/json/idp.json', idp)
write('data/json/ret.json', ret)

#Import counties.
#$lradata = csv('data/lra_attacks.csv')

#$lradata.each do |record|
  #data = {'type' => 'county'}
  #data['data'] = record || {}
  #data['adjacent'] = adjacent(record['adjacent_fips']) || {}
  #fn = "js/data/#{record['fips']}.json"
  #write(fn, data)
#end

$et = Time.now
puts $et.strftime("Ending on %m/%d/%Y at %I:%M:%S%p")
