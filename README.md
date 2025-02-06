# humble-superhero

# Team player attitude

I believe the I would expand this task by adding a persistance layer, being either a database or maybe just a simple JSON file since the structure of the data I need to store is fairly simple. This way, in case the backend server stops running at some point, or I need to scale it by adding multiple instances, I won't lose access to the data which was already added. If I were to work on this feature with a teammate, I would separate this into two separate tasks, first one would handle the creation of the database and setting up the backend to communicate with it and the second task would be to update the existing service, so it can read/write directly from/to the database.

# If I had more time
If I had more time, I would maybe work a bit on the styling of the frontend, so it would not look as bland as it does now. Also, I would set up config files for both backend and frontend so that when I run in development or production, my needed hosts and ports are in specific files and not hardcoded in every place in the code where I use them.

P.S. I'm not having much experience with React, but tried my best to have a simple working UI, hope it's good enough.
