import React from "react";
import { Route, Switch } from "react-router-dom";
import AllCategory from "./../../pages/AllCategory/AllCategory";
import SingleCategory from "../../pages/SingleCategory/SingleCategory";
import ProductPage from "./../../pages/ProductPage/ProductPage";

const CategoryRoutes = props => {
  console.log(props.match);
  return (
    <div>
      <Switch>
        <Route
          path={`/category/:categoryId/:productId`}
          component={ProductPage}
        />
        <Route exact path={`/category/all`} component={AllCategory} />
        <Route
          exact
          path={`/category/:categoryId`}
          component={SingleCategory}
        />
      </Switch>
    </div>
  );
};

export default CategoryRoutes;
