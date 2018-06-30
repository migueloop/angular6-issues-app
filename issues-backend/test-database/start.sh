#!/bin/sh

# Run the MySQL container, with a database named 'users' and credentials
# for a issues-service user which can access it.
echo "Starting DB..."
docker run --name db -d \
  -e MYSQL_ROOT_PASSWORD=123 \
  -e MYSQL_DATABASE=users -e MYSQL_USER=admin -e MYSQL_PASSWORD=123 \
  -p 3307:3307 \
  mysql:latest

# Wait for the database service to start up.
echo "Waiting for DB to start up..."
docker exec db mysqladmin --silent --wait=30 -uadmin -p123 ping || exit 1

# Run the setup script.
echo "Setting up initial data..."
docker exec -i db mysql -uadmin -p123 issuesdb < setup.sql
