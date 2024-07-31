const express = require(`express`);
const router = express.Router();
const controller = require(`../controller/Ctodo`);

// todo 작성
router.post(`/`, controller.postTodo);

// todo 한개 조회
router.get(`/:id`, controller.getTodo);

// todo 전체 조회
router.get(`/`, controller.getTodos);

// todo 수정
router.patch(`/:id`, controller.patchTodo);

// todo 삭제
router.delete(`/:id`, controller.deleteTodo);

module.exports = router;