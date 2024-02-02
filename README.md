# bugbusters-backend
A repository containing the server-side application code developed for a Hackathon project.

# Overview
API that filters data of the API https://pole-emploi.io/data/api/offres-emploi

# Installation
run npm i 

# Configuration
Create a .env file.In this file put a client_id, client_secret and a scope (elements from pole emploi API https://pole-emploi.io/data/documentation)

# Usage 
In the package_json you have some scripts:

# Endpoints
/jobdata?number=
It send a job of Paris(75) and with ROMECODE : M1810
without ?number : one job is send.
?number > 10 send 10.

# Authentication

No authentification

# Request Examples
-Use the file apiTest.http
GET http://localhost:3001/jobdata?number=2

[
  {
    "intitule": "Pilote activité maintenance GSMR (H/F)",
    "experienceExige": "E",
    "dateCreation": "2024-01-17T18:56:32.000Z",
    "departement": "75 - PARIS 08"
  },
  {
    "intitule": "Agent de Production Informatique F/H (H/F)",
    "experienceExige": "D",
    "dateCreation": "2024-01-24T12:32:22.000Z",
    "departement": "75 - Paris (Dept.)"
  }
]

# Error Handling
GET http://localhost:3001/jobdata?number=2
error 500 if something happens

# Testing 
npm run test












