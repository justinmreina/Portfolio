-- This file is automatically generated using maintenance/generateSchemaSql.php.
-- Source: ./tables.json
-- Do not modify this file directly.
-- See https://www.mediawiki.org/wiki/Manual:Schema_changes
CREATE TABLE /*_*/oathauth_users (
  id INT NOT NULL,
  module VARCHAR(255) NOT NULL,
  data BLOB DEFAULT NULL,
  PRIMARY KEY(id)
) /*$wgDBTableOptions*/;
