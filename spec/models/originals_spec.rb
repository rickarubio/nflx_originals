require 'rails_helper'

describe Original do
  it { is_expected.to have_db_column :title }
  it { is_expected.to have_db_column :box_art_url }
  it { is_expected.to have_db_column :release_year }
  it { is_expected.to have_db_column :maturity }
  it { is_expected.to have_db_column :is_streaming }
  it { is_expected.to have_db_index :title }
end
