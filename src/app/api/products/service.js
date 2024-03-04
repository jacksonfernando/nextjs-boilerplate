import { connectToDataBase } from "@/utils/mongodb";
import {
  getProductsPaginationQuery,
  createProductQuery,
  getProductByIdQuery,
  getProductsByTypeQuery,
  deleteProductByIdQuery,
  findOneAndUpdateProductByQuery
} from "./repository"

const getProductsPagination = async (offset, limit) => {
  await connectToDataBase()
  return getProductsPaginationQuery(offset, limit)
}

const createProduct = async (body) => {
  await connectToDataBase()
  return createProductQuery(body);
}

const getProductById = async (id) => {
  await connectToDataBase()
  return getProductByIdQuery(id);
}

const getProductsByType = async (type, offset, limit) => {
  await connectToDataBase()
  return getProductsByTypeQuery(type, offset, limit);
}

const deleteProductById = async (id) => {
  await connectToDataBase()
  return deleteProductByIdQuery(id);
}

const findOneAndUpdateProduct = async (body) => {
  await connectToDataBase()
  return findOneAndUpdateProductByQuery(body);
}

export {
  getProductsPagination,
  createProduct,
  getProductById,
  getProductsByType,
  deleteProductById,
  findOneAndUpdateProduct
}
