'use server'
import { nanoid } from "nanoid"
const {PrismaClient} = require("@prisma/client")

const prism = new PrismaClient()

export default async function add(formData){
  const origin = formData.get("url")
  // const storigin = JSON.stringify(origin)
  const short = nanoid(8)

  await prism.url.create({
    data : {
      originalUrl : origin,
      shortUrl : short
    }
  })
  return {short}
}