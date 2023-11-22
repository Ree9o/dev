function links(parent, args, parent, context) {
  return context.prisma.links
    .findUnique({
      where: { id: parent.id },
    })
    .links();
}

module.exports = {
  links,
};
