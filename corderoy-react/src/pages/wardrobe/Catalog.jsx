import '../../styles/wardrobe/Catalog.scss'
import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function Catalog(props) {
  const {collection} = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`/api/products?collection=${encodeURIComponent(collection)}`)
        .then(resp => {
          setProducts(resp.data);
        })
  }, [collection]);

  return (
      <div className={classNames('Catalog', props.className)}>
        <div className="title">
          <h1>{collection}</h1>
        </div>
        <div className="cards">
          {products.map(p => (
            <img src={`https://m.media-amazon.com/images/G/01/Shopbop/p${p.product.colors[0].images[0].src}`}/>
          ))}
        </div>
      </div>
  );
}