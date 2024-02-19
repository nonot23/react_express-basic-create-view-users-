const express = require('express')
const app = express()
const port = 3001
const mysql = require('mysql2')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.get('/users', (req,res) => {
    db.query('SELECT * FROM users', (err,result) => {
        if(err) {
            console(err)
        } else {
            res.send(result)
        }
    })
})

app.post('/create', (req,res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    db.query(
        "INSERT INTO users (firstname,lastname,email,password) VALUES (?,?,?,?)",
        [firstname,lastname,email,password], (err,result) => {
            if(err) {
                console.log(err)
            } else {
                res.status(200).json('Your have registered successfully')
            }
        }
    )
})
// Swagger definition
const  swaggerOption =  {
    definition: {
        openapi: '3.1.0',
        info: {
            title : 'API Documentation',
            version : '1.0.0',
            description :  'เริ่มต้น API เพิ่ม และแสดงข้อมูล'
        },

    
        servers: [
            {
                 url: 'http://localhost:3001',
            },
    ],
    },
    apis: ['index.js'],
};
const swaggerSpec = swaggerJsdoc(swaggerOption);
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(swaggerSpec))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/**
 * @swagger
 * /users:
 *  get:
 *     summary: Get all users
 *     responses:
 *          200:
 *             description: Successful response
 *          500:
 *             description: Internal server error
 */
app.get('/users', (req,res) => {
    //Yor API logic here
});

    /**
     * @swagger
     * /create:
     *      post:
     *          summary: Add a users
     *          requestBody:
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                          name:
     *                             type: string
     * 
     *      responses:
     *            200:
     *              description: Add Created successful
     *            500:
     *              description: Internal server error
     *                
     */
    app.post('/create',(req,res) => {
        //Your API logiv here
    })