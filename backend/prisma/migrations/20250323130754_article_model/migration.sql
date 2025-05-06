-- CreateTable
CREATE TABLE "articles" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "category" TEXT,
    "author" TEXT NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "image_url" TEXT NOT NULL,
    "image_caption" TEXT NOT NULL,
    "tags" TEXT NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);
