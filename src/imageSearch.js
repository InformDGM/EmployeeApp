import React, { useState, useEffect } from "react";
import "./image.css";
import { createApi } from "unsplash-js";

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "i2u0MBy4vr0Li5cOe78IBz73aGR1rK8u7XZ8UGIpEx8",
});
const ImageSearch = () => {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);
  const [pageid, setPageid] = useState(1);

  const fetchRequest = async (pageid) => {
    api.search
      .getPhotos({
        query: img,
        orientation: "landscape",
        page: pageid,
        perPage: 10,
      })
      .then((result) => {
        console.log(result);
        const photoResult = result.response.results;
        const nextResult = res.concat(photoResult);
        setRes(nextResult);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  };

  useEffect(() => {
    fetchRequest(pageid);
  }, []);

  const Submit = () => {
    fetchRequest(pageid);
  };

  const OnLoadMore = () => {
    setPageid(pageid + 1);
    fetchRequest(pageid + 1);
  };
  return (
    <>
      <div class="wrapper">
        <div class="image-header">
          <input
            className="input"
            type="text"
            placeholder="Search Anything..."
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <button type="submit" onClick={Submit} className="button">
            Search
          </button>
        </div>
        <div className="card-list">
          {res.map((val) => {
            return (
              <>
                <img
                  className="card-image"
                  src={val.urls.small}
                  alt="val.alt_description"
                />
              </>
            );
          })}
        </div>
        <button type="button" onClick={OnLoadMore} className="button  ">
          Loadmore
        </button>
      </div>
    </>
  );
};
export default ImageSearch;