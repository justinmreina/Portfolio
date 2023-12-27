-- This file is automatically generated using maintenance/generateSchemaChangeSql.php.
-- Source: abstractSchemaChanges/patch-linter-add-template-tag-fields.json
-- Do not modify this file directly.
-- See https://www.mediawiki.org/wiki/Manual:Schema_changes
DROP  INDEX linter_page;
DROP  INDEX linter_cat_namespace;
DROP  INDEX linter_cat_page_position;
CREATE TEMPORARY TABLE /*_*/__temp__linter AS
SELECT  linter_id,  linter_page,  linter_namespace,  linter_cat,  linter_start,  linter_end,  linter_params
FROM  /*_*/linter;
DROP  TABLE  /*_*/linter;
CREATE TABLE  /*_*/linter (    linter_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,    linter_page INTEGER UNSIGNED NOT NULL,    linter_namespace INTEGER DEFAULT NULL,    linter_cat INTEGER UNSIGNED NOT NULL,    linter_start INTEGER UNSIGNED NOT NULL,    linter_end INTEGER UNSIGNED NOT NULL,    linter_params BLOB DEFAULT NULL, linter_template BLOB DEFAULT '' NOT NULL,    linter_tag BLOB DEFAULT '' NOT NULL  );
INSERT INTO  /*_*/linter (    linter_id, linter_page, linter_namespace,    linter_cat, linter_start, linter_end,    linter_params  )
SELECT  linter_id,  linter_page,  linter_namespace,  linter_cat,  linter_start,  linter_end,  linter_params
FROM  /*_*/__temp__linter;
DROP  TABLE /*_*/__temp__linter;
CREATE INDEX linter_page ON  /*_*/linter (linter_page);
CREATE INDEX linter_cat_namespace ON  /*_*/linter (linter_cat, linter_namespace);
CREATE UNIQUE INDEX linter_cat_page_position ON  /*_*/linter (    linter_cat, linter_page, linter_start,    linter_end  );
CREATE INDEX linter_cat_template ON  /*_*/linter (linter_cat, linter_template);
CREATE INDEX linter_cat_tag ON  /*_*/linter (linter_cat, linter_tag);