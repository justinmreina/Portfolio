-- This file is automatically generated using maintenance/generateSchemaSql.php.
-- Source: Math/sql/mathoid.json
-- Do not modify this file directly.
-- See https://www.mediawiki.org/wiki/Manual:Schema_changes
CREATE TABLE mathoid (
  math_inputhash TEXT NOT NULL,
  math_input TEXT NOT NULL,
  math_tex TEXT DEFAULT NULL,
  math_mathml TEXT DEFAULT NULL,
  math_svg TEXT DEFAULT NULL,
  math_style SMALLINT DEFAULT NULL,
  math_input_type SMALLINT DEFAULT NULL,
  math_png TEXT DEFAULT NULL,
  PRIMARY KEY(math_inputhash)
);
