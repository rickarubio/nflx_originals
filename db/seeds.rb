# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'nflx_originals_seeds.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1:unicode')
csv.each do |row|
  parsed_row = row.to_hash
  parsed_row['is_streaming?'] = row.to_hash['is_streaming?'].downcase == 'true'
  o = Original.new
  o.title = parsed_row['title']
  o.box_art_url = parsed_row['box_art_url']
  o.release_year = parsed_row['release_year']
  o.maturity = parsed_row['maturity']
  o.is_streaming = parsed_row['is_streaming?']
  o.save
end

puts "There are now #{Original.count} rows in the originals table"
