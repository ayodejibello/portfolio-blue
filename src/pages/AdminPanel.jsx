import { useState } from "react";
const AdminPanel = () => {
  const [title, setTitle] = useState("");
  return (
    <>
      <section className="p-10">
        <input
          type="text"
          className="p-2 rounded-lg border"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div
          contentEditable
          className="border rounded-lg p-2 min-h-40 mi min-w-60"
        ></div>
      </section>
    </>
  );
};
export default AdminPanel;
