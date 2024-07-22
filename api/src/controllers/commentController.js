
const Model = require('../models');
const Post = Model.Post
require('dotenv').config()
const Comment = Model.comments;
module.exports ={
    async index(req, res){
        const comments = await Comment.findAll({

        })
        return res.json(comments);
    },
    // async show(req, res){
    //     try{
    //         const {id} = req.params;
    //         if(!id){
    //             return res.status(400).json({
    //                 errors:['Faltando ID']
    //             })
    //         }
    //         const post = await Posts.findByPk(id)
    //         if(!post){
    //             return res.status(400).json({
    //                 errors:['Post nao existe']
    //             })
    //         }
    //         return res.status(200).json(post);

    //     }catch(e){
    //         return res.status(400).json({
    //             errors: e.message,
    //           });
    //     }
    //   },
    
    async store(req, res) {
        try {
           
            const { content, post_id,user_id } = req.body;
           
          
            if ( !content || !post_id|| !user_id) {
                return res.status(400).json({ error: 'Dados incompletos' });
            }

            // Create a new user
          const newComment = { content, post_id, user_id}
            const comment = await Comment.create(newComment);

            // Respond with the created user
            return res.status(201).json({ comment });

        } catch (error) {
            // Log the error for debugging
            console.error('Error creating comment:', error);

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
            const comment = await Comment.findByPk(id);
            if(!comment){
                return res.status(400).json({
                    errors:['Comentarrio nao existe']
                })
            }
            const updatedComent= await Comment.update(req.body);
            return res.json(updatedComent);
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
            const comment = await Comment.findByPk(id);
            if(!comment)
                {
                    return res.status(400).json({
                        errors:['Comentario nao existe']
                    });
                }
                await comment.destroy();
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