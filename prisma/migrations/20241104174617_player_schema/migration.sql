-- CreateEnum
CREATE TYPE "Role" AS ENUM ('collegeReprenstative', 'player');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "universityName" TEXT NOT NULL,
    "collegeAddress" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'player',
    "designation" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");
