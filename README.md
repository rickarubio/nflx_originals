# NFLX Originals Viewer

This web app allows you to view netflix originals metadata in a tabular format.

It leverages Rails 5 ActionCable and AngularJS to display the list of netflix originals in real time.

## Installation

1. ``` git clone git@github.com:rickarubio/nflx_originals.git```
2. ``` cd nflx_originals```
3. ``` rvm install ruby-2.4.0``` skip this if you already have ruby 2.4.0
4. ``` gem install bundler``` skip this if you already have bundler installed
5. ``` bundle install```
6. If you had issues with installing ```webkit-capybara``` then do ```brew update``` then ```brew install qt@5.5``` then ```brew link --force qt55`` then ```bundle```
7. ```rake db:create```
8. ```rake db:migrate```
9. ```rake db:seed```
10. ```rvm use 2.4.0```
11. ```rails s```
12. visit http://localhost:3000
13. If you got errors about connecting to redis, make sure you have redis installed: ```brew install redis``` then ```brew services start redis```
14. If you're still having redis issues, you may need to ```nohup redis-server &``` first before you ```rails s```
15. ```fg``` then ```ctrl-c``` to kill redis if you had to do step 14.

EASY 1-2-3 You should now be able to run nflx viewer locally!

## Running Specs

```rake spec```

## Viewing this app on heroku
Head on over to https://nflx-originals.herokuapp.com/#/
