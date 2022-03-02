# README

Hello! Welcome to BeatCoder, an app developed by me (Pierce Raphael).
I developed this app for my final project at Flatiron coding bootcamp, please enjoy!

FULLY DEPLOYED VERSION - https://beat-coder.herokuapp.com/

In order to run this application locally, ensure that all the proper dependancies are installed for Rails Version 2.7.4, as well as for ActiveStorage.
This application relies on ActiveStorage to seed and store audio files, and uses a JavaScript React frontend to render audio elements sourced from the backend.

To run locally after cloning - 
1. Check that PostgreSQL is installed on your local system
3. Start the PostgreSQL server ('sudo service postgresql start' on Ubuntu)
4. Run rails db:create, db:migrate, then db:seed
5. Run rails s --port 4000
6. In a seperate Terminal, run npm start --prefix client

# beatcoderz
