ALTER TABLE /*_*/recentchanges
    MODIFY rc_title VARBINARY(255) DEFAULT '' NOT NULL,
    MODIFY rc_source VARBINARY(16) DEFAULT '' NOT NULL;
