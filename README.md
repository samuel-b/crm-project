# crm-project

N/A

## Preview

Note: Image saved at **/images/[project name].png**
will be the preview image in personal portfolio

## Goals

1. Improve typescript skills
2. Learn how to implement Azure stack and serverless services

## :bangbang: Updates

22/07/2022

-   Added an update modal to update a client record from the frontend
-   Changed forms based on current requirements (name, email, phone)

21/07/2022

-   Removed spring boot backend/api from this repo and developed a new backend/api using azure functions/cosmosDB in a seperate repo.

-   Started working on frontend implementing the create/read and update API endpoints

-   Updated README using new template

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

Backend

-   Database: CosmosDB
-   API: Serverless Azure Functions

| HTTP Method | Endpoint          | Action                                              | Auth Level  |
| ----------- | ----------------- | --------------------------------------------------- | ----------- |
| GET         | /api/clients      | Returns all client documents in cosmosDB\*\*        | Anonymous\* |
| POST        | /api/clients      | Creates a client document in cosmosDB\*\*           | Anonymous\* |
| PUT         | /api/clients/{id} | Updates an existing client document in cosmosDB\*\* | Anonymous\* |
| DELETE      | /api/clients/{id} | Deletes an existing client documen in cosmosDB\*\*  | Anonymous\* |

\*Functions currently have an anonymous authentication level as the database is filled with non-sensitive dummy data (may be changed in the future)  
\*\* If returns a successful response, otherwise the appropiate status code is returned

Frontend

-   Table component dynamically populates the table rows with client data using the GET method

-   Modal component sends the value of the inputs in the request body using the POST method

-   Button component in tha table's action column when clicked will delete the relevant record from the database using the DELETE method

-   Modal component sends the value of the inputs in the request body using the PUT method, initial value of the inputs are equal to the current document's values

-   Notification compontent that renders conditionally (success/error) based on if the response from triggered HTTP method

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
