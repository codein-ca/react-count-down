import React from 'react';
import DateControl from '../DateControl';
import Display from '../Display';
import { CardProps } from '../interfaces';
import './Card.css';

const Card = ({ cardState, handleClick }: CardProps) => {
  /*const deleteCard = () => {
    const state = { ...cardState, title: 'DELETE' };
    handleClick(state);
  };*/

  const updateCard = () => {
    const state = { ...cardState, editMode: true };
    handleClick(state);
  };
  return (
    <article className="Card flex-col">
      <section className="card-header flex space-around">
        {!cardState.editMode && (
          <span id={cardState.id} className="card-date">
            {cardState.dateString
              .split(' ')
              .slice(0, cardState.dateString.split(' ').length - 1)
              .join(' ')}
          </span>
        )}
        <form className="card-controls">
          <input
            className="card-update"
            type="button"
            value="⚙️"
            onClick={updateCard}
            aria-label="Update item"
          />
          {/*<input
            className="card-delete"
            type="button"
            value="Delete 🚮"
            onClick={deleteCard}
          />*/}
        </form>
      </section>
      {cardState.editMode ? (
        <DateControl cardState={cardState} handleClick={handleClick} />
      ) : (
        <Display cardState={cardState} handleClick={handleClick} />
      )}
    </article>
  );
};

export default Card;
