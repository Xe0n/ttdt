import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const NewsSingle = (props) => {
  const { id } = useParams();
  const [news, setNews] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const curLng = localStorage.getItem("lng");
  const navigate = useNavigate();
  React.useEffect(() => {
    async function getData() {
      try {
        const [NewsResponse] = await Promise.all([
          axios.get(
            `https://xn--80aqu.xn----7sbbrnkv3apccm2i.xn--p1ai/api/action/newsSingle?id=${id}`
          ),
        ]);
        setIsLoading(false);
        setNews(NewsResponse.data[0]);
      } catch (error) {
        alert("Ошибка при запросе данных ;(");
        console.error(error);
      }
    }
    getData();
  }, [id]);
  const text = () => {
    if (curLng === "ru") {
      return { __html: news.text };
    } else {
      if (news.textTAT !== "") {
        return { __html: news.textTAT };
      } else {
        return { __html: news.text };
      }
    }
  };

  return (
    <div className="container-fluid" id="newsSingle">
      <div className="row slide-block">
        <div className="col-12 my-5 py-5">
          {!isLoading ? (
            <>
              <p>
                <a className="link-font link-back" onClick={() => navigate(-1)}>
                  {"<Назад"}
                </a>
              </p>
              <h1 className="pb-3">
                {curLng === "ru" ? news.title : news.titleTAT}
              </h1>
              <p className="content" dangerouslySetInnerHTML={text()}></p>
            </>
          ) : (
            "Загрузка..."
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsSingle;
