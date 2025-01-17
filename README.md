# Notes on Coding Challenge

1. Prior to starting: briefly reviewed the code, added some changes to the README based on my installation experience.
2. Upon receiving instructions, read the Notion doc and reviewed the Figma mock-ups, determined what classes would be needed for implementation
  
    Data Model
    ![Data Model](https://raw.githubusercontent.com/yvonneyeh/server-take-home/main/data-model.png)
3. Read some docs about [Sequelize](https://sequelize.org/docs/v6/core-concepts/model-basics/) (first time using it)
4. Wrote endpoints needed to render the main `offers` feed.
5. For the endpoint to remove a campaign from a publisher at some point in the future, some options considered:
    - Cron job (external)
    - In-app scheduler (server side)

# JetFuel Server Take Home Exercise

This is a backend exercise that will give you the chance to see what kind of things we build at JetFuel!

## Setup

You'll need to set up your local machine to host this server, leading up to the exercise.

1. You'll need postgres installed on your local machine. We also recommend you install a CLI to postgres, like psql, so you can run queries and see what is in the database. You can find instructions on how to install postgres and psql here:

https://docs.timescale.com/timescaledb/latest/how-to-guides/connecting/psql/

2. Once Postgres is installed, you'll need to create a database for this exercise. Please name the database 'server_take_home'. From psql, you'd need to so something like:

```
psql postgres                           // To launch the postgres terminal
create database server_take_home;       // To create the database
create user postgres                    // To create the user needed to access the database
\q                                      // Exit the terminal
psql -d server_take_home                // to relaunch the terminal, but connected specifically to your new database.
```

3. Once you have the database created, you're ready to run the server. Navigate back to the root directory, and run:
```
node bin/www
```
If all goes well, you should see a message that the server running on port 3000. Navigate to http://localhost:3000/ and you'll see a blank express template.
```
Express server listening on port: 3000  // it worked!!
```

4. Finally, you'll need a way to send GET requests to the server. We recommend Postman (https://www.postman.com/) but feel free to use an alternative if you prefer. From your Postman or your API Client of choice, try hitting the /creator endpoint:
```
http://localhost:3000/creator?creator_id=1
```

You should get a JSON response back from the server:
```
{
  "id": 1,
  "firstname": "Tim",
  "lastname": "Lenardo",
  "created_at": "2020-11-28T18:50:47.930Z",
  "updated_at": "2020-11-28T18:50:47.930Z",
  "deleted_at": null
 }
```

If that works, then you're all set! We'll be in touch with instructions for the actual exercise. Feel free to navigate the code a bit to get a sense for the project layout.
