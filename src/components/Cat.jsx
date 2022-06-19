import React from "react";
import image from "../assets/cat.png";
import { useState } from "react";

const Cat = ({ title, description, count, id }) => {
  const [selected, setSelected] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isTitle, setIsTitle] = useState("Сказочное заморское яство");

  const hoverChangeTitle = () => {
    setIsTitle(
      selected ? (
        <h3 className='title_red'>"Котэ не одобряет?"</h3>
      ) : (
        "Сказочное заморское яство"
      )
    );
  };

  const addToSelected = () => {
    if (count > 0) {
      //количество товаров
      setSelected(!selected);
    } else if (count === 0) {
      setDisabled(!disabled);
    }
  };

  return (
    <div
      onClick={addToSelected}
      className={
        selected
          ? "cat_block-selected"
          : disabled
          ? "cat_block cat_block-disabled "
          : "cat_block"
      }>
      <div className='cat_block-info'>
        <h3 className='cat_title' onMouseEnter={hoverChangeTitle}>
          {isTitle}
        </h3>
        <h2 className='cat_about'>Нямушка</h2>
        <h3 className='cat_about-food'>c {title}</h3>
        <p className='cat_portion'>{description}</p>
        <img className='cat_img' src={image} alt='Кот' />
        <div className={selected ? "cat_weight-red" : "cat_weight"}>
          <div className='cat_weight-info'>
            {id === 0 ? "0,5" : id === 1 ? "1" : id === 2 ? "5" : ""}
            <span>кг</span>
          </div>
        </div>
      </div>
      {selected ? (
        <div className='cat_buy' onClick={addToSelected}>
          Филе из цыплят с трюфелями в бульоне.
        </div>
      ) : disabled ? (
        <div className='cat_buy-gold' onClick={addToSelected}>
          Печалька, с {title} закончился.
        </div>
      ) : (
        <div className='cat_buy' onClick={addToSelected}>
          Чего сидишь? Порадуй котэ, <a href='#'>купи.</a>
        </div>
      )}
    </div>
  );
};

export default Cat;
