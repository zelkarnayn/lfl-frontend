import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from "../GetNews/NewsGet.module.css";
import { deleteNews } from "../../../features/news.slice";

export default function NewsCard({ image, title, _id }) {
  const dispatch = useDispatch()

  const handleDel = (_id) => {
      dispatch(deleteNews(_id))
  }

  return (
    <div className={style.card}>
      <Link to={`/news/${_id}`} className={style.alink}>
        <div className={style.cardNews}>
          <img
            width={"100%"}
            src={`http://mysite.na4u.ru/${image}`}
            alt="news-ima"
            className={style.image}
          />
          <div className={style.title}>{title}</div>
          <button onClick={() => handleDel(image, _id)}>DELETE</button>
        </div>
      </Link>
    </div>
  );
}
