import React, { Component } from 'react'
import DUMMY_DATA from './dummy.data'
import CatalogCollections from '../../components/catalogCollections/CatalogCollections'

import './Shop.scss'

class Shop extends Component {
    constructor() {
        super();

        this.state = {
            collections: DUMMY_DATA
        }
    }

    render() {
        return (
            <div>
                {this.state.collections.map(({id, ...collectionKeys}) => (
                    <CatalogCollections key={id} {...collectionKeys} />
                ))}
            </div>
        )
    }
}

export default Shop