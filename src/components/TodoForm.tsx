import { FormEvent, useState } from "react";

interface Props {
  onSubmit: (title: string) => void;
}

function TodoForm({ onSubmit }: Props) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    onSubmit(newItem);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <h1>New Item</h1>
          <input
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
            type="text"
            id="item"
            required
          />
        </div>
        <br></br>
        <button className="btn btn-primary">Add</button>
      </form>
    </>
  );
}

export default TodoForm;
