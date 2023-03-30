import React, { useState } from "react";

const BirthdayWishes = ({ data }) => {
  let [wish, setWish] = useState(data);
  let [total, setTotal] = useState(5);

  const deleteWishes = (id) => {
    const deleteWish = wish.filter((wish) => id !== wish.id);
    setWish(deleteWish);
    setTotal(total - 1);
  };

  const clearWishes = () => {
    setWish([]);
    setTotal(0);
  };

  return (
    <div className="container">
      <div>
        <h1>
          <span>{total}</span> Birthday Wishes
        </h1>
        {wish.map((wish) => {
          return (
            <div key={wish.id}>
              <div className="birthdays">
                <div className="imges">
                  <img src={wish.img} alt="cat" />
                </div>
                <div className="name">
                  <h3>{wish.name}</h3>
                  <p>{wish.age} years</p>
                </div>
                <div className="delete">
                  <button type="button" onClick={() => deleteWishes(wish.id)}>
                    ❌
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <button className="btn-clear" type="button" onClick={clearWishes}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default BirthdayWishes;
