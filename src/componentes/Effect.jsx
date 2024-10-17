import React, { useEffect, useState } from "react";

const Effect = () => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  useEffect(() => {
    setUsers([
      {
        hola: "cambie de ID",
      },
    ]);
    console.log(users);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(0);
  };
  return (
    <>
      <h2>Effect</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            search
          </label>
          <input
            value={id}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Effect;
