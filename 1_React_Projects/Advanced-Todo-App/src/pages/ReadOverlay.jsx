import { useContext } from "react";
import { TodoStore } from "../context/TodoContext";
import { MdDeleteForever } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
const ReadOverlay = () => {
  const { showTodoData, showreadoverlay, setShowreadOverlay,setShowdeleteOverlay,setDeleteTodo } =
    useContext(TodoStore);
  const { id, title, details, n_characters, n_words, n_sentences, createdAt } =
    showTodoData;
  // console.log(showTodoData);

  // conditional rendering shortcircuiting method to hide overlay screen 
  return (
    <>
      {showreadoverlay && (
        <section
          onClick={() => setShowreadOverlay(false)}
          className="h-[100vh] w-[100vw]  bg-[#000a] fixed top-0 left-0 "
        >
          <article className="w-[100%] flex justify-center items-center h-[90%]">
            <div className="flex flex-col w-[90%]  h-[80%]  gap-[5vh] p-4 rounded-md border-pink-600 border-2 shadow-lg bg-slate-100">
              <h3 className="text-3xl bg-pink-600 text-white rounded-md p-2 font-semibold text-center uppercase">
                {title}
              </h3>
              <p className="text-3xl bg-slate-200 p-2 whitespace-nowrap overflow-hidden h-[35vh] text-blue-600">
                {details}
              </p>
              <div className="flex  flex-col gap-8 justify-center items-center">
                <div className="text-2xl flex flex-col gap-3 text-pink-600 font-serif font-bold  ">
                  <span className="text-center">
                    Characters : {n_characters}
                  </span>
                  <span className="text-center">Words : {n_words}</span>
                  <span className="text-center">Sentences : {n_sentences}</span>
                </div>
                <div className="flex justify-around  w-[100%]">
                  <button className="bg-slate-800 p-2 rounded-lg hover:bg-red-700 "
                  onClick={() => {
                        setShowdeleteOverlay(true);
                        setDeleteTodo(id);
                      }}>
                    <MdDeleteForever className="text-2xl text-white" />
                  </button>
                  <button className="bg-slate-800 p-2 rounded-lg hover:bg-yellow-600 ">
                    <BiSolidEdit className="text-2xl text-white" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default ReadOverlay;