const http = require('http');
const url = require('url');
const port = 3000;
const { getAllCategories, createCategory } = require('./logic/category');
const { getAllMedias, createMedia } = require('./logic/media');


const server = http.createServer(async(req, res) => {

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  res.setHeader('Content-Type', 'application/json');

  if (path === '/api/category/list') {
    const categories = await getAllCategories();
    return res.end(JSON.stringify({data: categories }));

  } else if (path === '/api/category/add') {
    const category = {
        id:1,
        name: 'Category 1'
    }
    await createCategory(category);
    return res.end(JSON.stringify({message: 'Catégorie créée avec succès' }));

  } else if (path === '/api/media/list') {
    const medias = await getAllMedias();
    return res.end(JSON.stringify({data: medias }));
  } else if (path === '/api/media/add') {
    const media = {
        id:1,
        category_id: 1,
        name: 'Media 3'
    }
    await createMedia(media);
    return res.end(JSON.stringify({message: 'Media crée avec succès' }));
  }
    
});

server.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
