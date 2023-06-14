import * as actionTypes from "./actionTypes";

export function addToCategory(category) {
  return { type: actionTypes.CREATE_CATEGORY_SUCCESS, payload: category };
}

export function deleteFromCategory(category) {
  return { type: actionTypes.DELETE_CATEGORY_SUCCESS, payload: category };
}

export function updateCategory(category) {
  return { type: actionTypes.UPDATE_CATEGORY_SUCCESS, payload: category };
}

export function AllCategories(categories) {
  console.log("girdi");
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

export function getCategoriesApi(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/categories";
    console.log(url);
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(AllCategories(result)));
  };
}

export function saveCategoryApi(category) {
  return fetch("http://localhost:3000/categories/" + (category.id || ""), {
    method: category.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(category),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveCategory(category) {
  return function (dispatch) {
    return saveCategoryApi(category)
      .then((savedCategory) => {
        product.id
          ? dispatch(updateCategory(savedCategory))
          : dispatch(addToCategory(savedCategory));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.error("Bir hata oluştu");
  throw error;
}
