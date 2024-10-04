import React from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { NewsLoadingBlock } from "../components";
import { useTranslation } from "react-i18next";

const News = () => {
  const [offset, setOffset] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [perPage] = React.useState(10);
  const [pageCount, setPageCount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const { t } = useTranslation();
  const curLng = localStorage.getItem("lng");

  function kitcut(text, limit) {
    text = text.trim();
    if (text.length <= limit) return text;

    text = text.slice(0, limit);

    return `${text.trim()} ...`;
  }
  const text = (newsText) => {
    return { __html: kitcut(newsText, 1000) };
  };

  const getData = async () => {
    const res = await axios.get(
      `https://xn--80aqu.xn----7sbbrnkv3apccm2i.xn--p1ai/api/action/news`
    );
    const data = res.data;
    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((pd) => (
      <div key={pd.id} className="col-12 card">
        <div className="card-body">
          <Link to={`/news/${pd.id}`}>
            <h5 className="card-title">
              {curLng === "ru"
                ? pd.title
                : pd.titleTAT !== ""
                ? pd.titleTAT
                : pd.title}
            </h5>
          </Link>
          <h6 className="card-subtitle mb-2 text-muted">{pd.date}</h6>
          <div className="bodyPost card-text">
            <p
              dangerouslySetInnerHTML={text(
                curLng === "ru"
                  ? pd.text
                  : pd.textTAT !== ""
                  ? pd.textTAT
                  : pd.text
              )}
            ></p>
          </div>
          <Link to={`/news/${pd.id}`}>Читать подробнее...</Link>
        </div>
      </div>
    ));
    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
    setLoading(true);
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  React.useEffect(() => {
    getData();
  }, [offset]);

  if (loading) {
    return (
      <div className="container-fluid mt-5" id="news">
        <h1>{t("teatr_news")}</h1>
        <div className="row">
          {data}
          <ReactPaginate
            previousLabel={"Назад"}
            nextLabel={"Вперед"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid mt-5" id="news">
        <div className="row">
          {Array(1)
            .fill(0)
            .map((_, index) => (
              <NewsLoadingBlock key={index} />
            ))}
        </div>
      </div>
    );
  }
};

export default News;
