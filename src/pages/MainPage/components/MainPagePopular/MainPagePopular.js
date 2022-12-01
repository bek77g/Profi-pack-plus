import React, { useState } from 'react';
import { HandySvg } from 'handy-svg';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import heart from '../../../../assets/icons/favourite.svg';
import cart from '../../../../assets/icons/cart.svg';
import { toast, Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { CustomContext } from '../../../../hoc/mainContentContext';
import { favsProduct, limitCount } from '../../../../hoc/Hooks';

const Product = ({ data }) => {
  const [count, setCount] = useState(1);

  const { baseUrl, addCart, addFav } = useContext(CustomContext);

  const {
    Title,
    Price,
    New,
    Slug,
    Gallery,
    CountType,
    sub_catalog,
    Count,
    favorite,
    BestSeller,
    MinCount,
  } = favsProduct(data);

  const addToCart = () => {
    addCart(data, count);
    toast.success('Товар добавлен в корзину');
  };

  const addToFav = () => {
    addFav(data);
    favorite
      ? toast.success('Товар удалён из избранных')
      : toast.success('Товар добавлен в избранное');
  };
  useEffect(() => setCount(MinCount), []);

  return (
    <div className='mainPagePopular__catalog__cards__card'>
      <div className='mainPagePopular__catalog__cards__card__tags'>
        {New && (
          <div className='mainPagePopular__catalog__cards__card__new'>
            Новинка
          </div>
        )}
        {BestSeller && (
          <div className='mainPagePopular__catalog__cards__card__hit'>Хит</div>
        )}
      </div>
      <div className='mainPagePopular__catalog__cards__card__heart'>
        <p
          className={`icon ${favorite ? 'active' : ''}`}
          onClick={() => addToFav()}>
          <p>
            <HandySvg width='24' height='24' src={heart} />
          </p>
        </p>
      </div>
      <div className='mainPagePopular__catalog__cards__card__img'>
        <Link to={`${sub_catalog.catalog.Slug}/${sub_catalog.Slug}/${Slug}`}>
          <img
            className='d-block w-100'
            src={`${baseUrl}${Gallery[0].url}`}
            alt={Title}
          />
        </Link>
      </div>
      <div className='mainPagePopular__catalog__cards__card__descr'>
        <h5>
          <Link to={`${sub_catalog.catalog.Slug}/${sub_catalog.Slug}/${Slug}`}>
            {Title}{' '}
          </Link>
        </h5>

        <div className='mainPagePopular__catalog__cards__card__cart'>
          <Link to={`${sub_catalog.catalog.Slug}/${sub_catalog.Slug}/${Slug}`}>
            <p style={{ lineHeight: '23px' }}>
              {Price} сом/{CountType}
              <br />
              <i style={{ fontStyle: 'initial', fontSize: '18px' }}>
                {Price * count} сом
              </i>
            </p>
          </Link>
          <span onClick={() => addToCart()}>
            <HandySvg src={cart} className='icon' width='30' height='30' />
          </span>
        </div>
        <div className='catalogPagePopular__catalogs__cards__card__quantity'>
          <button
            type='button'
            className='btn btn-info'
            onClick={() =>
              setCount(count <= MinCount ? MinCount : count - MinCount)
            }>
            -
          </button>
          <input
            type='text'
            onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
            onChange={(e) => {
              let num = +e.target.value;
              setCount(num >= Count ? limitCount(num, Count) : num);
            }}
            className='form-control form-control-color'
            value={count}
          />
          <button
            type='button'
            className='btn btn-info'
            onClick={() =>
              setCount(
                count >= Count ? limitCount(count, Count) : count + MinCount
              )
            }>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const MainPagePopular = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [hitProducts, setHitProducts] = useState([]);
  const slideSliceNew = Math.ceil(newProducts.length / 4);
  const slideSliceHit = Math.ceil(hitProducts.length / 4);
  useEffect(() => {
    axios('/api/products?filters[New][$eq=true]&populate=deep').then(
      ({ data }) => setNewProducts(data.data)
    );
    axios('/api/products?filters[BestSeller][$eq=true]&populate=deep').then(
      ({ data }) => setHitProducts(data.data)
    );
  }, []);
  const newCatalog = newProducts.map((elem) => (
    <Product key={elem.id} data={elem} />
  ));
  const hitCatalog = hitProducts.map((elem) => (
    <Product key={elem.id} data={elem} />
  ));
  function sliceSlides(array, slide_size, slide_number) {
    return array.slice(
      (slide_number - 1) * slide_size,
      slide_number * slide_size
    );
  }
  return (
    <div className='mainPagePopular'>
      <Carousel variant='dark'>
        {[...Array(slideSliceNew).fill()].map((x, i) => {
          return (
            <Carousel.Item key={i}>
              <div className='mainPagePopular__catalog__cards'>
                {sliceSlides(newCatalog, 4, i + 1)}
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      {hitProducts.length > 0 && (
        <Carousel variant='dark' style={{ marginTop: '20px' }}>
          {[...Array(slideSliceHit).fill()].map((x, i) => {
            return (
              <Carousel.Item key={i}>
                <div className='mainPagePopular__catalog__cards'>
                  {sliceSlides(hitCatalog, 4, i + 1)}
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
      <Toaster position='bottom-center' />
    </div>
  );
};

export default MainPagePopular;
