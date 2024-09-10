# Podcapsule API

## Overview

The API is responsible for managing podcast data and fielding requests from the Podcapsule frontend.

## About

The project is written with typescript and ran using node.

Most endpoints are protected with authentication using JWT tokens. 

## Installation and Local Development

### Environment Variables

All environment variables should be set in a `.env` file located on the root of the API project. See [`.env.example`](./.env.example) for an example of what fields should be included.

### Instructions

1. Install dependencies

On the root of the API project, run the following command to install the required dependencies:

```bash
npm install
```

2. Running the project locally

To run the project locally, run the following command:

```bash
npm run dev
```

This will start a development server at http://localhost:8000.

## Deployment

This project is current deployed using Vercel.

