import productsModel from "@/models/products"
import mongoose from "mongoose";

const getProductsPaginationQuery = async (offset, limit) => {
  return productsModel.aggregate(
    [
      { $sort: { createdAt: -1 } },
      { $skip: Number(offset) },
      { $limit: Number(limit) }
    ]
  )
}

const getProductsByTypeQuery = async (type, offset, limit) => {
  return productsModel.aggregate(
    [
      { $sort: { createdAt: -1 } },
      { $skip: Number(offset) },
      { $limit: Number(limit) },
      { $match: { type } }
    ]
  )
}

const createProductQuery = async (body) => {
  return productsModel.create(body);
}

const getProductByIdQuery = async (id) => {
  return productsModel.findOne({ _id: new mongoose.Types.ObjectId(id) })
}

const deleteProductByIdQuery = async (id) => {
  return productsModel.deleteOne({ _id: new mongoose.Types.ObjectId(id) })
}

const findOneAndUpdateProductByQuery = async (body) => {
  const { _id, ...restBody } = body;
  return productsModel.findOneAndUpdate({ id: new mongoose.Types.ObjectId(_id) }, restBody);
}

export {
  getProductsPaginationQuery,
  createProductQuery,
  getProductByIdQuery,
  getProductsByTypeQuery,
  deleteProductByIdQuery,
  findOneAndUpdateProductByQuery
}
