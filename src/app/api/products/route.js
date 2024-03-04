import { NextResponse } from "next/server";
import {
  getProductsPagination,
  createProduct,
  getProductById,
  getProductsByType,
  deleteProductById,
  findOneAndUpdateProduct
} from "./service";
import { isNil } from "lodash";

export const GET = async (request) => {
  const nextUrl = request.nextUrl
  const offset = nextUrl.searchParams.get('offset')
  const id = nextUrl.searchParams.get('id')
  const limit = nextUrl.searchParams.get('limit')
  const type = nextUrl.searchParams.get('type')
  let fetchedProducts;
  try {
    if (!isNil(offset) && !isNil(limit)) {
      fetchedProducts = await getProductsPagination(offset, limit);
    }
    if (!isNil(id)) {
      fetchedProducts = await getProductById(id);
    }
    if (!isNil(type)) {
      fetchedProducts = await getProductsByType(type, offset, limit);
    }
    return NextResponse.json(fetchedProducts);
  } catch (error) {
    return NextResponse.json({ message: 'failed' }, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    await createProduct(body);
    return NextResponse.json({ message: "Success storing product" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to store product",
    }, { status: 500 })
  }
}

export const PUT = async (request) => {
  try {
    const body = await request.json();
    await findOneAndUpdateProduct(body);
    return NextResponse.json({ message: "Success updating product" }, { status: 200 });
  } catch (error) {
    console.log(error.toString())
    return NextResponse.json({
      message: "Failed to update product",
    }, { status: 500 })
  }
}

export const DELETE = async (request) => {
  try {
    const nextUrl = request.nextUrl
    const id = nextUrl.searchParams.get('id')
    await deleteProductById(id);
    return NextResponse.json({ message: "Success deleting product" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to delete product",
    }, { status: 500 })
  }
}
