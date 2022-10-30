import React, { useState } from 'react';
import arr from '../../../assets/icons/arr.svg';
import Form from 'react-bootstrap/Form';
import secondCatalog from '../../../components/constants/secondCatalog';
import { Link } from 'react-router-dom';
import { HandySvg } from 'handy-svg';
import cart from '../../../assets/icons/cart.svg';
import PaginationComp from '../../../components/Pagination';
import { toast, Toaster } from 'react-hot-toast';

const Products = (props) => {
  const [count, setCount] = useState(1);

  const addToCart = () => {
    toast.success('Товар добавлен в корзину');
  };

  return (
    <div className='mainPagePopular__catalog__cards__card'>
      <div className='mainPagePopular__catalog__cards__card__new'>Новинка</div>
      <div className='mainPagePopular__catalog__cards__card__heart'>
        <p class='icon'>
          <p>
            <svg width='24' height='24'>
              <use href='#favourite.2a1d5b83572b289bc5592a74153597a1'></use>
            </svg>
          </p>
        </p>
      </div>
      <div className='mainPagePopular__catalog__cards__card__img'>
        <Link to='/products'>
          <img
            className='d-block w-100'
            src={props.data.img}
            alt='First slide'
          />
        </Link>
      </div>
      <div className='mainPagePopular__catalog__cards__card__descr'>
        <Link to='/products'>
          <h5>{props.data.description}</h5>
        </Link>
        <div className='mainPagePopular__catalog__cards__card__cart'>
          <Link to='/products'>
            <p>{props.data.price}</p>
          </Link>
          <span onClick={() => addToCart()}>
            <HandySvg src={cart} className='icon' width='30' height='30' />
          </span>
        </div>
        <div className='catalogPagePopular__catalogs__cards__card__quantity'>
          <button
            type='button'
            className='btn btn-info'
            onClick={() => setCount(count - 1)}>
            -
          </button>
          <input
            type='text'
            pattern='[0-9]{1,5}'
            className='form-control form-control-color'
            value={count}
          />
          <button
            type='button'
            className='btn btn-info'
            onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const SubCategoryPageCards = () => {
  const newCatalog = secondCatalog.map((elem) => <Products data={elem} />);

  return (
    <div className='subCategoryPageCards'>
      <div className='catalogPage'>
        <div className='catalogPage__top'>
          <span>
            Главная <img src={arr} alt='' />
          </span>
          <span>Каталог</span>
          <h2>Каталог</h2>
        </div>
        <div className='catalogPage__mid'>
          <div></div>
          <div className='catalogPage__mid__select'>
            <select name='' id=''>
              <option value='1'>По популярности</option>
              <option value='1'>По цене</option>
              <option value='1'>По дате</option>
            </select>
          </div>
        </div>
        <div className='catalogPage__content'>
          <div className='catalogPage__content__left'>
            <span>Параметры</span>
            <div className='catalogPage__content__left__price'>
              <Form.Label>Цена</Form.Label>
              <Form.Range />
              от 100.000 до 500.000
            </div>
          </div>
          <div className='catalogPage__content__right'>
            <div className='catalogPagePopular__catalogs__cards'>
              {newCatalog}
            </div>
            <PaginationComp />
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default SubCategoryPageCards;
