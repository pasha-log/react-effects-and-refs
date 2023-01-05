import React from "react";

const CreateCard = ({cardSrc, id}) => {
    return (
        <div className="card" key={id}>
            <img className="card-img" src={cardSrc} alt="" class='center'/>
        </div>
    )
}

export default CreateCard;