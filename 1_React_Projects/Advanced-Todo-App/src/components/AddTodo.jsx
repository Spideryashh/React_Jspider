import { useContext, useState } from "react";
import { TodoStore } from "../context/TodoContext";

const AddTodo = () => {
  const { todolist, handleAddTodo } = useContext(TodoStore);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  // on submitting form
  const handleSubmit = e => {
    // stop refreshing page 
    e.preventDefault();

    // if fields are blank then used conditional rendering to display the alert fields are empty otherwise store data and call handleAddTodo in TodoContext to set the data inside their variables
    if (title.length != "") {
      const n_characters = details.split("").length;
      const n_words = details.split(" ").length;
      const n_sentences = details.split(".").length - 1;
      handleAddTodo({ title, details, n_characters, n_sentences, n_words });
    } else {
      alert("Fields Are Empty!!!!");
    }

    // here after the data is set and todo is made it make the input fields of title and details empty
    setTitle("");
    setDetails("");
  };

  // created a simple form which takes input like title and details and on submitting form handleSubmit function runs
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-[70%] lg:w-[50%] "
    >
      <input
        type="text"
        placeholder="Title...😎"
        value={title}
        className="text-2xl py-1 px-3 outline-none border-b-4 focus:border-b-pink-600 rounded-md uppercase"
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        className="text-2xl py-1 px-3 outline-none border-b-4 focus:border-b-pink-600 resize-none rounded-xl"
        placeholder="Details...📕"
        value={details}
        onChange={e => setDetails(e.target.value)}
      />
      <button className="text-2xl py-1 px-3 outline-none border-4 bg-[#363636]  text-white hover:border-pink-600  rounded-full">
        Create
      </button>
    </form>
  );
};

export default AddTodo;