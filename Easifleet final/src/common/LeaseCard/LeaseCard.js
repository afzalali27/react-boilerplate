import React from 'react';
import {
    LeaseCardWrappper
} from './LeaseCardStyled';
import {Card} from 'react-bootstrap';

export const LeaseCard = ({label,price,className,imgUrl}) => {
    price = (!price || price===0 || price==="0")? "0.00" : price;
    return (
      <LeaseCardWrappper className={className}>
        <Card>
            <img variant="top" alt="card_img" src={imgUrl} />
            <Card.Body>
              <Card.Title>{price}</Card.Title>
              <Card.Text>
                {label}
              </Card.Text>
            </Card.Body>
        </Card>

      </LeaseCardWrappper>
    
    );
};
