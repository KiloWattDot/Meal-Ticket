import React from "react";
import "./itemtext-style.css";
import burger from "./imgm/burger.jpeg";
import taco from "./imgm/taco.png";
import waffle from "./imgm/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.webp";

function ItemSection() {
  return (
    <section className="items">
        <div className="in-between">
      <div class="item">
        <img src={burger} alt="burger"></img>
        <h4 className="item-title">Burger</h4>
        <div className="item-info">
          <span>$10.99</span>
          <span>description:</span>
        </div>
        <button>Order</button>
      </div>


      
      <div className="item">
        <img src={taco} alt="taco"></img>
        <h4 className="item-title">Taco</h4>
        <div className="item-info">
          <span>$10.99</span>
          <span>description:</span>
        </div>
        <button>Order</button>
      </div>
      <div className="item">
        <img src={waffle} alt="waffle"></img>
        <h4 className="item-title">Pancakes</h4>
        <div className="item-info">
          <span>$10.99</span>
          <span>description:</span>
        </div>
        <button>Order</button>
      </div>
      <div class="item">
        <img src={burger} alt="burger"></img>
        <h4 className="item-title">Burger</h4>
        <div className="item-info">
          <span>$10.99</span>
          <span>description:</span>
        </div>
        <button>Order</button>
      </div>
      <div className="item">
        <img src={taco} alt="taco"></img>
        <h4 className="item-title">Taco</h4>
        <div className="item-info">
          <span>$10.99</span>
          <span>description:</span>
        </div>
        <button>Order</button>
      </div>
      <div className="item">
        <img src={waffle} alt="waffle"></img>
        <h4 className="item-title">Pancakes</h4>
        <div className="item-info">
          <span>$10.99</span>
          <span>description:</span>
        </div>
        <button>Order</button>
        </div>
        </div>

    </section>
  );
}

export default ItemSection;
