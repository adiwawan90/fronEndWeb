import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
// import { storeProducts } from '../data'; // sdh terimport di Context
import { ProductConsumer } from '../Context';

export default class ProductList extends Component {
  // sudahtdh di butuhkan karena sdh dapat dr Context
  // state = {
  //   products: storeProducts
  // };

  render() {
    // console.log(this.state.products);
    return (
      <React.Fragment>
        <div className='pv-5'>
          <div className='container'>
            <Title name='Our' title='Products' />
            <div className='row'>
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
      //   <div>

      //     <Product />
      //   </div>
    );
  }
}
