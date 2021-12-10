import React, { useState, useEffect } from "react";
import axios from "axios";
const HomeCategory = () => {
  const [categories, setCategories] = useState([]);

  var APICallString = "https://tcss445-myfi.herokuapp.com/api/categories";

  const fetchCategories = async () => {
    await axios
      .get(APICallString, { withCredentials: true })
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((err) => {
        //window.location.href = "/";
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="p-3">
      <h4 className="text-center">Category Spending</h4>
      <ul className="list pt-3">
        {categories.map((category) => {
          return (
            <button className="list-buttons" value={category}>
              {category}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeCategory;
