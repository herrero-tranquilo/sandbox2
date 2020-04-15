CREATE DATABASE sample_node_db;
CREATE USER sample_node_user WITH PASSWORD 'sample_node_pw';
ALTER ROLE sample_node_user
SET
  client_encoding TO 'utf8';
ALTER ROLE sample_node_user
SET
  default_transaction_isolation TO 'read committed';
ALTER ROLE sample_node_user WITH SUPERUSER;
GRANT ALL PRIVILEGES ON DATABASE sample_node_db TO sample_node_user;