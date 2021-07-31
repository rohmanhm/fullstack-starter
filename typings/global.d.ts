import { PrismaClient } from '@prisma/client'

declare interface Window {
  nookies: {
    set: any
    get: any
    destroy: any
  }
}

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient
    }
  }
}
