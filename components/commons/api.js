import { ref } from "vue";
import axios from "axios";

const boards = ref(null);

const fetchBoards = async () => {
  try {
    // const res = await axios.get("http://localhost:4000/boards");
    const res = await axios.get("http://192.168.1.71:4000/boards");
    boards.value = res.data;
  } catch (err) {
    console.log(err);
  }
};

const fetchBoard = async boardId => {
  try {
    // const res = await axios.get(`http://localhost:4000/boards/${boardId}`);
    const res = await axios.get(`http://192.168.1.71:4000/boards/${boardId}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createBoard = async Item => {
  try {
    // const res = await axios.post("http://localhost:4000/boards", Item);
    const res = await axios.post("http://192.168.1.71:4000/boards", Item);
    boards.value.push(res.data);
  } catch (err) {
    console.log(err);
  }
};

const editBoard = async (boardId, updatedItem) => {
  try {
    await axios.patch(
      `http://192.168.1.71:4000/boards/${boardId}/edit`,
      // `http://localhost:4000/boards/${boardId}/edit`,
      updatedItem,
    );
  } catch (err) {
    console.log(err);
  }
};

const deleteBoard = async boardId => {
  try {
    await axios.delete(`http://192.168.1.71:4000/boards/${boardId}`);
    // await axios.delete(`http://localhost:4000/boards/${boardId}`);
    const result = confirm("삭제하시겠습니까?");
    if (result) {
      alert("삭제되었습니다");
    } else {
      return;
    }
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
