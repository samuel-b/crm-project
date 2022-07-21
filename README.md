# crm-project

N/A

## Preview

Note: Image saved at **/images/[project name].png**
will be the preview image in personal portfolio

## Goals

1. Improve typescript skills
2. Learn how to implement Azure stack and serverless services

## :bangbang: Updates

21/07/2022

-   Removed spring boot backend/api from this repo and developed a new backend/api using azure functions/cosmosDB in a seperate repo.

-   Started working on frontend implementing the create/read and update API endpoints

-   Updated README using new template

# SDLC

## Requirements

1. As a user I do not want to worry about any underlying infrastracture of the project including virtal machines
2. As a user I may need to use the application at infrequent times but want to keep costs to a minimum
3. As a user I want to avoid potential data type errors at runtime
4. As a user I want to keep track of client information including name, email, phone number
5. As a user I want to be able to create, read, update and delete clients in the database from the frontend

## Design

-   Azure Function API - Serverless, do not need to worry about the underlying infrastracture and charged by consumption to keep costs to a minimum
-   CosmosDB - Non-relational/un-structured database based on requirements, keep cost to a minimum and keep with Azure for consistency
-   Typescript - Statically typed to catch potential data type errors at compile time rather than runtime
-   React - Fast, flexiable, working with dynamic data and based on requirements can render an identical component for each data record

## Software Development

Backend (Built before frontend, has own seperate github repo)

-   Full CRUD auzure functions RESTful API connected to a cosmosDB for persistant data
-   Functions currently have an anonymous authentication level as the database is filled with non-sensitive dummy data (may be changed in the future)
-   Each function uses a try statement and returns the appropiate status code and data in the body of the response
-   Each function is created one at a time and tested locally before moving to the next
-   Pushed to develop branch that triggers a CI/CD github action
-   Test endpoints against azure endpoints

Frontend

-   Tested I could retrieve data from the cosmosDB using the API's get/read endpoint

-   Created a table component that dynamically populates the table rows with client data

-   Created a modal with a form that sends the value of the inputs in the request body to the API's create endpoint

-   Created an action column in the table with a delete button/action when pressed will delete the relevant record from the database using the API's delete endpoint

-   Created a notification compontent that renders conditionally based on if the response from the create or delete methods were successful

-   Started with validation for the create client form

## Testing
(Possibly add unit testing in the future)

Backend

-   All endpoints tested locally prior to deployment to Azure
-   All endpoints are tested again post deployment

## Deployment

Backend

-   Pushing to the develop branch on github triggers a github action(CI/CD pipeline) that will deploy the application to Azure

## Post Deployment or Operations/Maintenance

# Reflection

## What I have learned