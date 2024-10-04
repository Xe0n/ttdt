import React from "react";
import axios from "axios";
import { SlideShow } from "../components";
import { Link, useParams } from "react-router-dom";

const PersonSingle = () => {
  const [person, setPerson] = React.useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(true);
  const curLng = localStorage.getItem("lng");

  React.useEffect(() => {
    async function getData() {
      try {
        const [PersonResponse] = await Promise.all([
          axios.get(
            `https://xn--80aqu.xn----7sbbrnkv3apccm2i.xn--p1ai/api/action/personSingle?id=${id}`
          ),
        ]);
        setIsLoading(false);
        setPerson(PersonResponse.data[0]);
      } catch (error) {
        alert("Ошибка при запросе данных ;(");
        console.error(error);
      }
    }
    getData();
  }, []);

  const text = () => {
    return {
      __html:
        curLng === "ru"
          ? person.text
          : person.textTAT !== ""
          ? person.textTAT
          : person.text,
    };
  };
  return (
    <div className="container-fluid" id="person">
      <div className="row">
        <div className="col-md-4 col-12 mt-lg-0 mt-5 mb-lg-0 mb-3">
          <div>
            <img
              src={`https://xn--80aqu.xn----7sbbrnkv3apccm2i.xn--p1ai/${person.mainImg}`}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-8 col-12 pb-5 mt-lg-0 mt-5">
          <h1>
            {curLng === "ru"
              ? person.title
              : person.titleTAT !== ""
              ? person.titleTAT
              : person.title}
          </h1>
          <p dangerouslySetInnerHTML={text()}></p>
          <SlideShow items={person.galleryList} />
        </div>
      </div>
    </div>
  );
};

export default PersonSingle;
