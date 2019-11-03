import React from "react";
import { Route, Switch } from "react-router-dom";
import AllCategory from "./../../pages/AllCategory/AllCategory";
import SingleCategory from "../../pages/SingleCategory/SingleCategory";
import SingleProduct from "../../pages/SingleProduct/SingleProduct";

const CategoryRoutes = props => {
  return (
    <div>
      <Switch>
        <Route
          path={`/category/:categoryId/:productId`}
          component={SingleProduct}
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
