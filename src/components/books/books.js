import React from 'react';
import { Link } from 'react-router-dom';

import jsonData from '../../jsondata';

export default class Books extends React.Component {

    render() {
        const style = {
            parent: {
                float: "left",
                display: "flex",
                flexDirection: "row",
                padding: "0px auto",
                flexWrap: 'wrap',
                justifyContent: 'center'
            },
            image: {
                width: "200px",
                height: "200px",
                margin: "2px"
            }
        }
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Programming Books </h1>
                <div style={style.parent}>
                    {jsonData.map((book, i) => {
                        return (
                            <div key={book.id}>
                                <Link to={`/bookDiscription/${book.id}`} >
                                    <img src={book.src} style={style.image} />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}