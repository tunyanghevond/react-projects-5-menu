import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article key={id} className="menu-item">
            <img className="photo" src={img} alt={title} />
            <div className="item-info">
              <header>
                <h3>{title}</h3>
                <h5>{price}</h5>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Menu;
