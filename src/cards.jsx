import React from 'react';
import Featured from "./Featured";
import ob from "./ob";


function createCard(contact) {
    var key = contact.id;
    return <div className='col-sm-4 card-boot' id="{contact.id}">
    <div className='card' ><div className='card-body'>
        <img src={contact.image}></img>
        <a href='' className='btn btn-primary' className="gold">{contact.rating} Stars</a>
    </div>
    </div>
</div>
}

function Cards(props) {
    
    if(props.filter==="none"){
        return (<div className="row">
            {ob.map(createCard)}
        </div>
            
        );
        
        /* */
    }else if(props.filter==="featured"){
        return <Featured />
    }
}

export default Cards;