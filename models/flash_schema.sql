ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'project2'
CREATE DATABASE flashcard_db;

USE flashcard_db;


--
-- Table structure for table `terms`
--
CREATE TABLE terms (
  id int(11) NOT NULL,
  term varchar(100) NOT NULL,
  definition varchar(500) NOT NULL
);

--
-- Indexes for table `terms`
--
ALTER TABLE terms
  ADD PRIMARY KEY (id);


