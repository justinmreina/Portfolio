-- This file is automatically generated using maintenance/generateSchemaChangeSql.php.
-- Source: maintenance/abstractSchemaChanges/patch-watchlist-namespace_title-rename-index.json
-- Do not modify this file directly.
-- See https://www.mediawiki.org/wiki/Manual:Schema_changes
DROP  INDEX namespace_title ON  /*_*/watchlist;
CREATE INDEX wl_namespace_title ON  /*_*/watchlist (wl_namespace, wl_title);