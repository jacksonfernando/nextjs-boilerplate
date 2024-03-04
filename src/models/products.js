import mongoose from "mongoose";
mongoose.Promise = global.Promise;

const PRODUCTS_COLLECTION = 'products'

const imageSchema = new mongoose.Schema({
  imageUrl: String,
  color: String
})

const productsSchema = new mongoose.Schema({
  name: String,
  type: {
    type: String,
    enum: ['SUNGLASSES', 'OPTICAL', 'OTHER'],
    default: 'OTHER'
  },
  price: {
    type: Number,
    default: 0
  },
  description: String,
  deletedBy: String,
  defaultColor: String,
  images: [imageSchema],
  fitGuide: Array,
  sizeGuide: {
    frameWidth: Number,
    lensWidth: Number,
    bridgeLength: Number,
    templeLength: Number
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
});

const productsModel = mongoose.models.products || mongoose.model(PRODUCTS_COLLECTION, productsSchema)

export default productsModel;
