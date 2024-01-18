const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } }
})
module.exports = {
  showAllusers: async (req, res) => {
    const users = await prisma.user.findMany()
    res.json({
      status: true,
      data: users,
      method: req.method,
      url: req.url
    });
    console.log(users);
  },
  addUsers: async (req, res) => {
    try {
      const data = await prisma.user.create({
        data: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
      })
      res.json({
        status: true,
        data: data,
        method: req.method,
        message: 'Data users berhasil disimpan',
        url: req.url
      });
    } catch (error) {
      res.send('Error!')
    }
  },
  showUsers: async (req, res) => {
    const id = parseInt(req.params.id)
    const data = await prisma.user.findUnique({
      where: {
        id: id
      }
    })
    res.json({
      status: true,
      data: data,
      method: req.method,
      message: 'Data users berhasil diedit',
      url: req.url
    });
  },
  updateUsers: async (req, res) => {
    const id = parseInt(req.params.id)
    const updateUser = await prisma.user.update({
      where: {
        id: id
      },
      data: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      },
    })
    res.json({
      status: true,
      data: updateUser,
      method: req.method,
      message: 'Data users berhasil diedit',
      url: req.url
    });
  },
  deleteUsers: async (req, res) => {
    const id = parseInt(req.params.id)
    const deleteUser = await prisma.user.delete({
      where: {
        id: id
      },
    })
    res.send({
      status: true,
      data: deleteUser,
      method: req.method,
      message: 'data users berhasil dihapus',
      url: req.url
    });
  }
}