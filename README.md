# ecommerce BE

## Description 

Working Express.js API to use Sequelize to interact with a MySQL database.

## Tech stack

 - Node.js
 - Express.js
 - Sequilize
 - mysql2
 - SQL 
 - Javascript

## Installation

Load <pre><code>npm i</code></pre> to install all the dependencis then log into your mysql databases, and run the following comands from the db folder 
<pre><code>source schema.sql </code></pre>
<pre><code>source seeds.sql </code></pre>
<pre><code>source query.sql </code></pre>
if you see three tables populated with data after query.sql you are good to go!

## Video Demo

https://drive.google.com/file/d/1mQmNXmTXZ-m1ZpU74R_b2JKAXoOhj8aH/view


## Test

Test in Insomnia the following requests

- Product
    - GET all products ( /api/products/) 
    - GET product by ID ( /api/products/:id) 
    - POST product ( /api/products/) 
    - DEL product by ID ( /api/products/:id) 

- Categories
    - GET all categories ( /api/categories/) 
    - GET product by ID ( /api/categories/:id) 
    - POST product ( /api/categories/) 
    - DEL product by ID ( /api/categories/:id) 
    - PUT product by ID ( /api/categories/:id) 

- Tags
    - GET all products ( /api/tags/) 
    - GET product by ID ( /api/tags/:id) 
    - POST product ( /api/tags/) 
    - DEL product by ID ( /api/tags/:id)
    - PUT product by ID ( /api/categories/:id)  

## License

<img src="https://img.shields.io/static/v1?label=License&message=MIT&color=GREEN"/>