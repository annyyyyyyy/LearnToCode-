import API_ROUTES from "./routesConfig";

export async function getProductList(searchTerm){
  const response = await fetch(`${process.env.REACT_APP_HOST}${API_ROUTES.PRODUCTS}?name_like=${searchTerm ? searchTerm : ""}`);
  if(!response.ok){
      throw { message: response.statusText, status: response.status };  //eslint-disable-line
  }
  const data = await response.json()
  return data;
}

export async function getProduct(id){
  const response = await fetch(`${process.env.REACT_APP_HOST}${API_ROUTES.PRODUCTS}/${id}`);
  if(!response.ok){
      throw { message: response.statusText, status: response.status };  //eslint-disable-line
  }
  const data = await response.json()
  return data;
}

export async function getFeaturedList(){
  const response = await fetch(`${process.env.REACT_APP_HOST}${API_ROUTES.FEATURED_PRODUCTS}`);
  if(!response.ok){
      throw { message: response.statusText, status: response.status };  //eslint-disable-line
  }
  const data = await response.json()
  return data;
}