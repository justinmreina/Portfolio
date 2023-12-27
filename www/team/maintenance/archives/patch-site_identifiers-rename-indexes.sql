-- This file is automatically generated using maintenance/generateSchemaChangeSql.php.
-- Source: maintenance/abstractSchemaChanges/patch-site_identifiers-rename-indexes.json
-- Do not modify this file directly.
-- See https://www.mediawiki.org/wiki/Manual:Schema_changes
DROP  INDEX site_ids_site ON  /*_*/site_identifiers;
CREATE INDEX si_site ON  /*_*/site_identifiers (si_site);
DROP  INDEX site_ids_key ON  /*_*/site_identifiers;
CREATE INDEX si_key ON  /*_*/site_identifiers (si_key);