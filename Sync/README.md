# Podcapsule Sync

## Overview

The sync is responsible for synchronizing podcast data with the users' feeds and providing podcast recommendations.

## About

The project is written with typescript and ran using node.

### Jobs

The sync is comprised of multiple jobs that run on a cron schedule. The jobs and their descriptions are as follows:
- PodcastSync  
    The podcast sync queries the podcast sync queue for podcasts that need their episodes updated. When ran, the podcast's rss feed is queried to retrieve it's most recent episodes. Those episodes are then saved for future recommendations.  
- PodcastSyncQueue  
    The podcast sync queue finds podcasts that haven't been synced in a certain amount of time and adds them to the sync queue.
- PodcastUserSync  
    The podcast user sync queries the podcast user sync queue for users that need recommendations. When ran, the user will have a new podcast recommendation placed on their feed selected from their added podcasts. 
- PodcastUserSyncQueue  
    The podcast user sync queue finds users that need recommendations and adds them to the sync queue.

The sync uses a package called [bree](https://github.com/breejs/bree) to handle job scheduling and execution. The jobs are run on a cron schedule. The `server.ts` file contains the definition for the jobs and their associated schedules. 

## Installation and Local Development

### Environment Variables

The environment variables required for the project are located in the `.env.example` file. These variable values should be copied into a file named `.env` located at the root of the project and followed by their corresponding values.

### Instructions

1. Install dependencies

On the root of the sync project, run the following command to install the required dependencies:

```bash
npm install
```

2. Running the project locally

To run the project locally, run the following command:

```bash
npm run dev
```

## Deployment

This project is current deployed using Vercel.