const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController{
  async index(request, response){
    const categories = await CategoryRepository.findAll();

    response.json(categories);
  }

  async store(request, response){
    const name = request.body.name;

    if(!name){
      return response.status(400).json({error: 'Name is required'});
    }

    const category = await CategoryRepository.create({name});

    response.status(201).json(category)
  }

  show(request, response){
    const id = request.params.id;
    CategoryRepository.findById(id)
                      .then((category) => {
                                            if(!category){
                                             return response.status(404).json({error: 'Category not found'})
                                            };
                                            return response.json(category)
                                          })
                      .catch(() => {
                        return response.status(404).json({error: 'Category not found'});
                      })
  }

  async update(request, response){
    const id = request.params.id;
    const name = request.body.name;
    const categoryExists = await CategoryRepository.findById(id);

    if(!categoryExists){
      return response.status(404).json({error: 'Category not found'});
    };
    if(!name){
      return response.status(400).json({error: 'Name is required'});
    }

    const category = await CategoryRepository.update(id, name);

    response.json(category);
  }

  async delete(request, response){
    const id = request.params.id;

    await CategoryRepository.delete(id);

    response.sendStatus(204);

  }
}

module.exports = new CategoryController();
