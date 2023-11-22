// access database
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const newLink = await prisma.link.create({
    data: {
      description: "Graph qlをチュートリアルで学ぶ",
      url: "https://www.google.com/",
    },
  });
  const allLinks = await prisma.link.findMany();
  console.log(allLinks);
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    prisma.$disconnect;
  });
