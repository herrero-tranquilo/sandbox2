CREATE USER test_user WITH PASSWORD 'test1234';
ALTER ROLE test_user
SET
  client_encoding TO 'utf-8';
ALTER ROLE test_user
SET
  default_transaction_isolation TO 'read committed';
ALTER ROLE test_user WITH SUPERUSER;
CREATE DATABASE test_db;
GRANT ALL PRIVILEGES ON DATABASE test_db TO test_user;