const Model = require('../models');

require('dotenv').config()
const Posts = Model.Posts;
const Foto = Model.Foto;

module.exports ={
    async index(req, res){
        const post = await Posts.findAll();
        return res.json(post);

    },
    async show(req, res){
        try{
            const {id} = req.params;
            if(!id){
                return res.status(400).json({
                    errors:['Faltando ID']
                })
            }
            const post = await Posts.findByPk(id,{
                attibutes:['title']
            })
            if(!post){
                return res.status(400).json({
                    errors:['Post nao existe']
                })
            }
            return res.status(200).json(post);

        }catch(e){
            return res.status(400).json({
                errors: e.message,
              });
        }
      },
    
    async store(req, res) {
        try {
           
            const { title, content, user_id } = req.body;
           
          
            if (!title|| !content || !user_id) {
                return res.status(400).json({ error: 'Dados incompletos' });
            }

            // Create a new user
          const newPost = {title, content, user_id}
            const post = await Posts.create(newPost);

            // Respond with the created user
            return res.status(201).json({ post });

        } catch (error) {
            // Log the error for debugging
            console.error('Error creating user:', error);

            // Respond with an appropriate error message
            return res.status(500).json({ error: 'Erro no servidor. Por favor, tente novamente mais tarde.' });
        }
    },
    async update(req, res){
        try{
            const { id } = req.params;
            if(!id){
                return res.status(400).json({
                    errors:['Faltado o ID']
                })
            }
            const post = await Posts.findByPk(id);
            if(!post){
                return res.status(400).json({
                    errors:['Post nao existe']
                })
            }
            const updatedPost= await post.update(req.body);
            return res.json(updatedPost);
        }catch(e){
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
              });
        }
      },
    async delete(req,res){
        try{
        const {id} = req.params;
        if(!id){
            return res.status(400).json({
                errors:['Faltando ID']
            });
            
            
            }
            const post = await Posts.findByPk(id);
            if(!post)
                {
                    return res.status(400).json({
                        errors:['Post nao existe']
                    });
                }
                await post.destroy();
                return res.status(200).json({
                    apagado:true
                });
        }catch(e){
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
              });
        }
      },
}