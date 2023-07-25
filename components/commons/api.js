import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const boards = ref(null);

const fetchBoards = async () => {
  try {
    const res = await axios.get("http://localhost:4000/boards");
    boards.value = res.data;
  } catch (err) {
    console.log(err);
  }
};

const fetchBoard = async boardId => {
  try {
    const res = await axios.get(`http://localhost:4000/boards/${boardId}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createBoard = async Item => {
  try {
    const res = await axios.post("http://localhost:4000/boards", Item);
    boards.value.push(res.data);
    router.push("/");
  } catch (err) {
    console.log(err);
  }
};

const editBoard = async (boardId, updatedItem) => {
  try {
    await axios.patch(
      `http://localhost:4000/boards/${boardId}/edit`,
      updatedItem,
    );
    alert("수정완료");
    router.push("/");
  } catch (err) {
    console.log(err);
  }
};

const deleteBoard = async boardId => {
  try {
    await axios.delete(`http://localhost:4000/boards/${boardId}/delete`);
    alert("삭제되었습니다");
    router.push("/");
  } catch (err) {
    console.log(err);
  }
};

export default function usePosts() {
  return {
    fetchBoards,
    fetchBoard,
    createBoard,
    editBoard,
    deleteBoard,
    boards,
  };
}
