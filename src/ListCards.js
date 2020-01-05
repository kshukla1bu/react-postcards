import React from 'react';
import Card from './Card';

function ListCards(props){
    console.log(props.post,"smoke")
    return (
        <div className="container mt-4">
            <div className="row">
            {
                props.post.map((post)=> (
                    <div key = {post.id}>
                        <Card card = {post}/>
                    </div>
                ))
            }
            </div>
        </div>    

    )
}

export default ListCards;