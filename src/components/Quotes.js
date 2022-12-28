import React from "react";
import Card  from "react-bootstrap/card";

const Quotes = (props) => {
    const { character  } = props;
    return (
        <Card className="w-100">
        <Card.Body>
          <div className="row g-5">
            <div className="col-12 col-md-4">
                <img src={character.image} alt={character.character} className="img-fluid"/>
            </div>
            <div className="col-12 col-md-8 d-flex flex-column justify-content-center align-items-start">
              <Card.Title>{character.character}</Card.Title>
              <Card.Text>
              {character.quote}
              </Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
};

export default Quotes;
