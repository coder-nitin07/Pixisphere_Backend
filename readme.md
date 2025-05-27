# Pixisphere Backend

This is the backend system for Pixisphere – an AI-powered photography marketplace that connects clients with photographers and studios.

## Technologies Used

- Node.js (Express.js)
- MongoDB with Mongoose
- JWT Authentication
- Joi for validation
- Cloudinary for image uploads

## Features Implemented

1. Authentication & Role Management
   - Signup and Login with JWT
   - Roles: client, partner, admin
   - Role-based access middleware

2. Partner Onboarding & Admin Verification
   - Partners can submit onboarding form with personal and service details
   - Admin can view, approve, or reject partner requests

3. Inquiry Management
   - Clients can submit service inquiries
   - Partners can view inquiries and respond with a message, price, and availability

4. Portfolio Management (In Progress)
   - Schema created
   - Endpoint to add portfolio items is partially implemented

## Folder Structure 
    /backend
    |-- /controllers
    |-- /routes
    |-- /models
    |-- /middlewares
    |-- /config
    |-- app.js
    |-- .env




## API Endpoints (Completed)

| Method | Endpoint                            | Role     | Description                          |
|--------|-------------------------------------|----------|--------------------------------------|
| POST   | /api/auth/signup                    | All      | Register new user                    |
| POST   | /api/auth/login                     | All      | Login user and return token          |
| POST   | /api/partner/onboard                | Partner  | Submit partner onboarding form       |
| GET    | /api/admin/verifications            | Admin    | Get list of pending verifications    |
| PUT    | /api/admin/verify/:id               | Admin    | Approve or reject a partner          |
| POST   | /api/inquiry                        | Client   | Submit a new inquiry                 |
| GET    | /api/partner/getAllQueries          | Partner  | Get all matched inquiries            |
| POST   | /api/partner/responseToInquiry/:id  | Partner  | Respond to a specific inquiry        |

## Setup Instructions

1. git repo : 






## Postman Collection

Include the Postman collection in your submission for API testing.

## Project Status

- Authentication: Completed
- Partner Onboarding: Completed
- Admin Verification: Completed
- Inquiry Management: Completed
- Portfolio Management: In Progress
- PostgreSQL and Admin Dashboard: Not started


