import React from 'react'

function Card(props){
    return(
        <div className="col-auto mb-3">
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                <h5 className="card-title">User ID : {props.card.userId}</h5>
                        <h5 className="card-title">ID : {props.card.id}</h5>
                        <h5 className="card-subtitle mb-2 text-muted">{props.card.title}</h5>
                        <p className="card-text">{props.card.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
