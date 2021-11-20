-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` VARCHAR(191) NULL,
    `access_token` VARCHAR(191) NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` VARCHAR(191) NULL,
    `session_state` VARCHAR(191) NULL,
    `oauth_token_secret` VARCHAR(191) NULL,
    `oauth_token` VARCHAR(191) NULL,

    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sleep` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `bedTime` DATETIME(3) NOT NULL,
    `wakeTime` DATETIME(3) NOT NULL,
    `restingHeartRate` INTEGER NOT NULL,
    `heartRateVariability` INTEGER NOT NULL,
    `respitoryRate` DOUBLE NOT NULL,
    `bodyTemperature` DOUBLE NOT NULL,
    `sleepScore` INTEGER NOT NULL,
    `notes` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Meal` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `time` DATETIME(3) NOT NULL,
    `caption` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nutrition` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `dietaryRestriction` BOOLEAN NOT NULL,
    `timeRestriction` BOOLEAN NOT NULL,
    `caloricRestriction` BOOLEAN NOT NULL,
    `notes` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exercise` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `startTime` DATETIME(3) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `mode` VARCHAR(191) NOT NULL,
    `duration` DATETIME(3) NOT NULL,
    `avgHeartRate` INTEGER NOT NULL,
    `maxHeartRate` INTEGER NOT NULL,
    `caloriesBurned` INTEGER NOT NULL,
    `notes` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activity` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `caloresBurned` INTEGER NOT NULL,
    `exerciseMinutes` INTEGER NOT NULL,
    `standHours` INTEGER NOT NULL,
    `steps` INTEGER NOT NULL,
    `flights` INTEGER NOT NULL,
    `activityScore` INTEGER NOT NULL,
    `inactiveTime` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ScreenTime` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `totalPhoneScreenTime` DATETIME(3) NOT NULL,
    `timeInSocialApps` DATETIME(3) NOT NULL,
    `phonePickups` INTEGER NOT NULL,
    `notificationsReceived` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Daily` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `tags` VARCHAR(191) NOT NULL,
    `oneLineADay` VARCHAR(191) NOT NULL,
    `weight` DOUBLE NOT NULL,
    `restorativeTime` INTEGER NOT NULL,
    `highlight` VARCHAR(191) NOT NULL,
    `highlightAccomplished` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
