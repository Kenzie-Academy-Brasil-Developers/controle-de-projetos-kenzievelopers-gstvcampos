CREATE TYPE "OPERATING_SYSTEM" AS ENUM ('windows', 'linux', 'macOS');


CREATE TABLE IF NOT EXISTS "developers" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50) NOT NULL,
	"email" VARCHAR(50) NOT NULL UNIQUE
);


CREATE TABLE IF NOT EXISTS "developerInfos" (
	"id" SERIAL PRIMARY KEY,
	"developerSince" DATE NOT NULL,
	"preferredOS" "OPERATING_SYSTEM" NOT NULL,
	"developerId" INTEGER UNIQUE,
	FOREIGN KEY ("developerId")
		REFERENCES "developers"("id")
		ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS "projects" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50) NOT NULL,
	"description" TEXT,
	"repository" VARCHAR(120) NOT NULL,
	"startDate" TIMESTAMP DEFAULT NOW() NOT NULL,
	"endDate" DATE DEFAULT NULL,
	"developerId" INTEGER DEFAULT NULL,
	FOREIGN KEY ("developerId")
		REFERENCES "developers"("id")
		ON DELETE SET NULL
);
