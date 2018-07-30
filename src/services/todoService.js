import axios from "axios";

const fetchTodoData = async () => {
  const res = await axios.get("http://127.0.0.1:8848/api/todo").then(res => {
    return res.data.data.data;
  });
  return res;
};

export default fetchTodoData;
