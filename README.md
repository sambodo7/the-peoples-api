# The Peoples API

This is the API used by thepeopletree.ie 

# Dev Setup

  - Install docker
  - Run a neo4j container 
    ```sh
    docker run \
    --publish=7474:7474 --publish=7687:7687 \
    --volume=$HOME/neo4j/data:/data \
    neo4j
    ```
 - Login to http://localhost:7474/browser/ and create new password
