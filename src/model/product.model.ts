import { Schema, model, Document } from 'mongoose';

// Define an interface for the Product document
interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  availability: boolean;
}

// Define the Product schema
const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    availability: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);

// Create and export the Product model
const Product = model<IProduct>('Product', productSchema);
export default Product;