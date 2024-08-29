# Podcapsule Sync
================

## Overview
------------

The Sync folder is responsible for synchronizing podcast data with the user's feed. This includes retrieving podcast episodes, updating the user's feed, and handling podcast recommendations.

## Subfolders and Files
-----------------------

* [accessors](cci:4:///Users/timroty/Documents/GitHub/PodCapsule/Sync/src/jobs/UserPodcastSync.ts:0:0-4:0): This folder contains database accessors for interacting with the Supabase database.
* `constants`: This folder contains constant values used throughout the application, including the RSS feed template.
* `jobs`: This folder contains job scripts for running synchronization tasks.
* `src`: This folder contains the source code for the synchronization logic.

## Dependencies
------------

* Supabase database
* RSS feed parser

## Usage
-----

To run the synchronization tasks, navigate to the `jobs` folder and run the corresponding script. For example, to run the `UserPodcastSync` job, run the following command:
```bash
node UserPodcastSync.js