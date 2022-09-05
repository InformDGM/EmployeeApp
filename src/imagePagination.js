import React, { useState, useEffect } from "react";
import "./image.css";
import { createApi } from "unsplash-js";
import { Pagination, ImageList, ImageListItem } from "@mui/material";

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "i2u0MBy4vr0Li5cOe78IBz73aGR1rK8u7XZ8UGIpEx8",
});
const ImageSearch = () => {
  const [img, setImg] = useState("nature");
  const [res, setRes] = useState([]);
  const [pageid, setPageid] = useState(1);
  const [totalpages, setTotalPage] = useState(0);

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
        setRes(photoResult);
        setTotalPage(result.response.total_pages);
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

  const handleChange = (event, value) => {
    setPageid(value);
    fetchRequest(value);
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
        <ImageList sx={{ width: 500, height: 500 }} cols={3} rowHeight={164}>
          {res.map((val) => {
            return (
              <>
                <ImageListItem key={val.id}>
                  <img
                    src={val.urls.thumb}
                    alt="val.alt_description"
                    loading="lazy"
                  />
                </ImageListItem>
              </>
            );
          })}
        </ImageList>
        {totalpages > 0 && (
          <Pagination
            count={totalpages}
            color="primary"
            page={pageid}
            onChange={handleChange}
          />
        )}
      </div>
    </>
  );
};
export default ImageSearch;
