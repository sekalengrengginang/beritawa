const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } }
})
module.exports = {
  showAllarticle: async (req, res) => {
    try {
      const articles = (await prisma.post.findMany())
      if (articles.length > 0) {
        res.json({
          status: true,
          data: articles,
          method: req.method,
          url: req.url
        });
      } else {
        res.send('data artikel masih kosong!')
      }
    }
    catch (error) {
      res.send('error dalam menampilkan artikel!')
    }
  },
  addArticle: async (req, res) => {
    try {
        const data = await prisma.post.create({
          data: {
            title: req.body.title,
            article: req.body.article,
          },
        })
        res.json({
          status: true,
          data: data,
          method: req.method,
          message: 'artikel berhasil disimpan',
          url: req.url
        });
    } catch (error) {
      res.send('mohon isi data artikel!')
    }
  },
  showOnearticle: async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const data = await prisma.post.findUnique({
        where: {
          id: id
        }
      })
      res.json({
        status: true,
        data: data,
        method: req.method,
        url: req.url
      });
    } catch (error) {
      res.send('artikel tidak ditemukan!')
    }

  },
  updateArticle: async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const updateArtikel = await prisma.post.update({
        where: {
          id: id
        },
        data: {
          title: req.body.title,
          article: req.body.article,
        },
      })
      res.json({
        status: true,
        data: updateArtikel,
        method: req.method,
        message: 'artikel berhasil diedit',
        url: req.url
      });
    } catch (error) {
      res.send('artikel tidak berhasil diedit!');
    }
  },
  deleteArticle: async (req, res) => {
    try {
      const id = parseInt(req.params.id)
      const deleteUser = await prisma.post.delete({
        where: {
          id: id
        },
      })
      res.send({
        status: true,
        data: deleteUser,
        method: req.method,
        message: 'artikel berhasil dihapus',
        url: req.url
      });
    } catch (error) {
      res.send('artikel tidak ditemukan!');
    }
  }
}