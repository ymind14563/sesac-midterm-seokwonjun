const { Todo } = require(`../models`);

// todo 작성
exports.postTodo = async (req, res) => {
    try{
        const { title, done } = req.body;

        const newTodo = await Todo.create({ 
            title, done
        })

        res.json(newTodo);

    } catch (error) {
        console.error(error);
        res.status(500).send(`Internal Server Error`);
    }
}

// todo 한개 조회
exports.getTodo = async (req, res) => {
    try {

        
        const { id } = req.params;
        
        const todo = await Todo.findOne({
            where: { id },
        });

        // todo 없는 경우
        if (!todo) return res.status(404).json({ message: `Todo not found`})

        res.json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Internal Server Error`);
    }
}

// todo 전체 조회
exports.getTodos = async (req, res) => {
    
    try { 
        const todos = await Todo.findAll(); // select * from todo
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Internal Server Error`);
    }
}

// todo 수정
exports.patchTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, done } = req.body;

        console.log(`req>>>>>>>>>>>`,req)
        // todo 있는지 확인
        const todo = await Todo.findOne({
            where: { id }
        })

        if (!todo) return res.status(404).json({ message: `Todo not found`})


        const updatedTodo = await Todo.update(
            
            { title, done },

            { where: { id } }
        );

        todo.title = title;
        todo.done = done;

        todo.save();

        return res.json(todo);
        
    } catch (error) {
        console.error(error);
        res.status(500).send(`Internal Server Error`);
    }
}

// todo 삭제
exports.deleteTodo = async (req, res) => {
    try {
        
        const { id } = req.params;

        // todo 있는지 확인
        const todo = await Todo.findOne({
            where: { id }
        })

        if (!todo) return res.status(404).json({ message: `Todo not found`})


        const isDeleted = await Todo.destroy({
            where: { id }
        });

        if (isDeleted) {
            return res.status(404).json({ deletedId: `${id}`, message: `Todo not found`})
        } else {
            return res.status(404).json({ message: `Todo not found`})
        }

    } catch (error) {
        console.error(error);
        res.status(500).send(`Internal Server Error`);
    }
}