import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteNmae = "WeTube";
  res.locals.routes = routes;
  next();
};
