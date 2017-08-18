import React from 'react';
import { Link } from 'react-router-dom';

import jsonData from '../../jsondata';

export default class BookDescription extends React.Component {
    render() {
        let specificData = jsonData[this.props.match.params.id];
        const style = {
            parent: {
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                padding: "0px auto",
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                border: "5px solid black",
            },
            image: {
                width: "100px",
                height: "100px"
            },
            more: {
                display: "flex",
                flexDirection: "row-reverse",
                padding: "0px auto",
                flexWrap: 'wrap',
                justifyContent: 'center',
                width: "500px",
                border: "2px solid orange"
            }
        }
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Programming Books </h1>
                <div style={style.parent}>
                    <figure>
                        <img src={specificData.src} style={{ width: "50vh", height: "40vh" }} />
                        <figcaption>{specificData.description}</figcaption>
                    </figure>
                    <p>{specificData.title} </p>
                    <p><a href={specificData.url}>more info</a> </p>

                </div>
                <Link to="/">More books</Link>
            </div>
        )
    }
}