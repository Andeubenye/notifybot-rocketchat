NotifyBot for Rocket.Chat

NotifyBot is a lightweight notification service built with Express.js, designed to send messages to Rocket.Chat channels or users. It accepts HTTP requests (e.g., from webhooks or other apps) and forwards the content to Rocket.Chat using its REST API. The bot is documented using OpenAPI for easy integration and future scalability.

🚀 Features

Receives incoming HTTP requests to trigger Rocket.Chat notifications

Modular and scalable Express server setup

Centralized input validation and error handling

Simple and fast setup using Node.js and Express

Uses environment variables for secure configuration

OpenAPI specification included for API reference

📆 Tech Stack

Node.js – Backend runtime

Express.js – Web framework

Rocket.Chat REST API – Message delivery (planned)

OpenAPI / Swagger – API documentation

Morgan – Request logging middleware

dotenv – Environment variable management

📁 Project Structure

notifybot-rocketchat/
├── server.js                # Entry point for the app
├── .env                     # Environment variables
├── package.json            # Project metadata and dependencies
├── src/
    ├── routes/              # API route handlers
    ├── middleware/          # Validation and error handling

📄 API Documentation

The bot includes an OpenAPI spec (openapi.yaml or inline spec in code) for developers to understand available endpoints.

Once the server is running:

Visit http://localhost:3000/api-docs to view Swagger UI (if configured)

Or view the raw spec to generate docs elsewhere

🛠️ Getting Started

Prerequisites

Node.js v14+ installed

A Rocket.Chat instance and credentials for a bot user (for future integration)

Installation

Clone the repo and install dependencies:

git clone https://github.com/Andeubenye/notifybot-rocketchat.git
cd notifybot-rocketchat
npm install

Configuration

Create a .env file in the root directory and add your settings:

PORT=3000

Running the App

npm start

The app will run on http://localhost:3000 unless otherwise configured.

🦢 Sending a Notification

You can send a test notification with the following curl command:

curl -X POST http://localhost:3000/send \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello from NotifyBot!"}'

Or broadcast to multiple recipients:

curl -X POST http://localhost:3000/broadcast \
  -H "Content-Type: application/json" \
  -d '{"recipients": ["alice", "bob"], "message": "Hello team!"}'

🤖 Endpoint Overview

Method

Endpoint

Description

GET

/

Welcome message

GET

/status

Returns bot status and uptime

POST

/send

Sends a message

POST

/broadcast

Sends a message to multiple targets

Detailed endpoint behavior is documented in the OpenAPI spec.

📓 Suggested Improvements

Integrate with Rocket.Chat API for real message delivery

Add rate-limiting for abuse protection

Support attachments and markdown formatting

🤝 Contributing

Contributions are welcome! To contribute:

Fork the repository

Create a new branch: git checkout -b feature/your-feature

Make changes and commit: git commit -m 'Add some feature'

Push to your fork: git push origin feature/your-feature

Open a Pull Request

📜 License

This project is licensed under the MIT License.

Made with ❤️ by Andeubenye

