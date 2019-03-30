const db = require('../../config/database');
const LivroDao = require('../infra/livro-dao');

module.exports = (app) =>{
	app.get('/livros', function(req, resp) {

	    const livroDao = new LivroDao(db);
	    livroDao.lista()
            .then(livros => resp.marko(
                require('../views/books/list/list.marko'),
                {
                    livros: livros
                }

            ))
            .catch(erro => console.log(erro));
	});


    app.get('/livros/form', function(req, resp){
        resp.marko(require('../views/books/form/form.marko'));
    });

    app.post('/livros', function(req, resp) {

        const livroDao = new LivroDao(db);

        livroDao.adiciona(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));
    });

    app.delete('/livros/:id', function(req, resp){
        const id = req.params.id;
        const livroDao= new LivroDao(db)
            .then(() => resp.status(200).end())
            .catch(erro =>console.log(erro));
    });
};
