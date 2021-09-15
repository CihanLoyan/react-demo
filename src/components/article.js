import React from 'react'

const Article = (props) => {
    return (
        <div className="article">
            <h3>{props.title}</h3>
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default Article;
