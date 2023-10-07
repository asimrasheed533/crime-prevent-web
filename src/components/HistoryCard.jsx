import React from "react";

function HistoryCard({ type, date, subject }) {
  return (
    <div className="history__contaier__one__tabs__content__container__content__cards__card">
      <div className="history__contaier__one__tabs__content__container__content__cards__card__top">
        <div className="history__contaier__one__tabs__content__container__content__cards__card__top__left">
          Date: <span>{date}</span>
        </div>
        <div className="history__contaier__one__tabs__content__container__content__cards__card__top__right">
          Type: <span>{type}</span>
        </div>
      </div>
      <div className="history__contaier__one__tabs__content__container__content__cards__card__bottom">
        Subject:
        <span>{subject}</span>
      </div>
    </div>
  );
}

export default HistoryCard;
