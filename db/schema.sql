DROP TABLE flashcard_db;--
-- Database: `flashcard_db`
--
CREATE DATABASE flashcard_db;

USE flashcard_db;


--
-- Table structure for table `terms`
--
CREATE TABLE IF NOT EXISTS terms (
  id int(11) NOT NULL,
  term varchar(100) NOT NULL,
  definition varchar(500) NOT NULL
);

--
-- Indexes for table `terms`
--
ALTER TABLE terms
  ADD PRIMARY KEY (id);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `terms`
--
ALTER TABLE terms
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
