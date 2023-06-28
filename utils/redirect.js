"use client";

const Redirect = (routerHandler, path) => {
  const router = routerHandler();

  router.push(path);
  return <></>;
};
export default Redirect;
