import { useContext } from "react";
import { TodoStore } from "../context/TodoContext";
import AddTodo from "../components/AddTodo";
import Overlay from "./Overlay";
import ShowAllTodos from "../components/showAllTodos";

// Homepage UI (all components combined)
const Home = () => {
  const { todolist } = useContext(TodoStore);
  return (
    <section className="bg-[#e0ffcd] h-[100vh] overflow-hidden flex justify-center ">
      <article className="flex flex-col items-center gap-8 w-full py-9">
        <h1 className="text-5xl  font-semibold text-[#363636] font-serif"> Advanced Todo App</h1>
        <AddTodo />
        <Overlay />
        <ShowAllTodos />
      </article>
    </section>
  );
};

export default Home;