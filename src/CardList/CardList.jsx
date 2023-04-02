import { Link } from "react-router-dom"
import styles from "./CardList.module.css"
import React from 'react';

const CardList = ({ producto }) => {

    console.log(producto);

    return (
        <div className={styles.card}>
            <Link to={`${producto.id}`}>
                <img src={producto.Image} alt={producto.title} />
            </Link>

            <h3>{producto.Title}</h3>
            <p>${producto.Price}</p>
            
            <Link to={`${producto.id}`}>
                <button>Ver producto</button>
            </Link>
        </div>
    )
}

export default CardList
