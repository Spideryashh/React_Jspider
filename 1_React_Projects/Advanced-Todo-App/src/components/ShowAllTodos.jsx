import { useContext } from "react";
import { TodoStore } from "../context/TodoContext";
import { MdDeleteForever } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
const ShowAllTodos = () => {
  const { todolist, handleReadOverlay } = useContext(TodoStore);
  //   console.log("from show todos : ", todolist);

  // UI of showAllTodos
  return (
    <section className=" w-[100%] flex justify-center items-center p-8">
      <article className="flex flex-wrap gap-6 w-[100%] ">
        {todolist.map(value => {
          // Destructuring from individual Todo object
          const {
            id,
            title,
            details,
            n_characters,
            n_words,
            n_sentences,
            createdAt,
          } = value;
          return (
            <div
              className="flex flex-col w-[90%] lg:w-[25%]  gap-6 p-4 rounded-md border-slate-300 border-2 shadow-lg hover:shadow-2xl group hover:border-pink-600 bg-white "
              // on clicking the div of todo We are calling handleReadOverlay in TodoContext which filters that todo id and set the value of showOverlay true so that we can see the Overlay UI of selected todo with id that we have filtered.
              onClick={() => handleReadOverlay(id)}
            >
              <h3 className="text-3xl bg-slate-200 rounded-md p-2 font-semibold text-cente uppercase">
                {title}
              </h3>
              <p className="text-base bg-slate-200 p-2 text-ellipsis whitespace-nowrap overflow-hidden text-blue-600 font-serif font-bold">
                {details}
              </p>
              <div className="group-hover:flex hidden flex-col gap-8 justify-center items-center">
                <div className="text-sm flex flex-col gap-3 text-[#363636] font-serif font-bold ">
                  <span className="text-center">
                    Characters : {n_characters}
                  </span>
                  <span className="text-center">Words : {n_words}</span>
                  <span className="text-center">Sentences : {n_sentences}</span>
                </div>
                <div className="flex justify-around  w-[100%]">
                  <button className="bg-slate-800 p-2 rounded-lg hover:bg-red-700 ">
                    <MdDeleteForever className="text-2xl text-white" />
                  </button>
                  <button className="bg-slate-800 p-2 rounded-lg hover:bg-yellow-700 ">
                    <BiSolidEdit className="text-2xl text-white" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </article>
    </section>
  );
};

export default ShowAllTodos;