import React, { useState, useContext, useEffect} from 'react';
import {MainContext} from '../../contexts/contexts.js'
import Axios from 'axios';
import ProductInfo from './productinfo.js';
import StyleSelector from './styleselector.js';
import SelectSize from './selectsize.js';
import AddToCart from './addtocart.js';

function RightPanel() {
  const {products, setProducts, cart, setCart, currentProductId, setCurrentProductId, currentTheme, setCurrentTheme, features, setFeatures, styles, setStyles, currStyle, setCurrStyle, mainPicture, setMainPicture} = useContext(MainContext);

  return (
      <div className="rightpanel" >
        <ProductInfo />
        <div>Style > Selected style</div>
        <StyleSelector />
        <SelectSize />
        <AddToCart />
      </div>
  );
}

export default RightPanel;