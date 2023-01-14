CREATE TABLE text
(
    paragraph bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 ),
    likes bigint NOT NULL DEFAULT 0,
    content character varying,
    PRIMARY KEY (paragraph)
);

CREATE TABLE users
(
    username character varying(256) NOT NULL,
    PRIMARY KEY (username)
);