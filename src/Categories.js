import React from "react";

const Categories = ({ category, filterItems }) => {
  return (
    <div className="btn-section">
      {category.map((item, ind) => {
        return (
          <div key={ind}>
            <button className="btn" onClick={() => filterItems(item)}>
              {item}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
