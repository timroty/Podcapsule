# Podcapsule Frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app -e with-supabase`](https://vercel.com/templates/next.js/supabase).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Environment Variables

The environment variables required for the project are located in the `.env.example` file. These variable values should be copied into a file named `.env`, located at the root of the project, and followed by their corresponding values.s


## Deployment

This project is currently deployed using Vercel. 

## Project Structure

```
Frontend/
├── app/
|   ├── ...
│   ├── layout.tsx
|   └── globals.css
│   └── page.tsx
├── public/
│   └── ...
├── api/
│   └── ...
├── components/
│   └── ...
├── package.json
└── README.md
```

## Custom Scripts

In the `package.json` file, you'll find the following scripts:

- `dev`: Runs the app in development mode
- `build`: Builds the app for production
- `start`: Runs the built app in production mode
- `format`: Runs prettier on the source code
