-- This file is automatically generated using maintenance/generateSchemaChangeSql.php.
-- Source: maintenance/abstractSchemaChanges/patch-ipblocks_restrictions-ir_value.json
-- Do not modify this file directly.
-- See https://www.mediawiki.org/wiki/Manual:Schema_changes
ALTER TABLE  /*_*/ipblocks_restrictions
CHANGE  ir_value ir_value INT UNSIGNED NOT NULL;