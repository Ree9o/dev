const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { APP_SECRET } = require("../utils");

// ユーザ新規登録リゾルバ
async function signup(parent, args, context) {
  const password = await bycrypt.hash(args.password, 10);
  const user = await context.prisma.user.create({
    data: {
      ...args,
      password,
    },
  });
  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

async function login(parent, args, context) {
  const user = await context.prisma.user.findUnique({
    where: { email: args.email },
  });
  if (!user) {
    throw new Error("user undefind");
  }
  const valid = await bycrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("missing password");
  }
  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

async function post(parent, args, context) {
  const { userId } = context;

  return await context.prisma.link.create({
    data: {
      url: args.url,
      description: args.description,
      postedBy: { connect: { id: userId } },
    },
  });
}
module.exports = {
  signup,
  login,
  post,
};
