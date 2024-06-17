/// File is generated from https://studio.fabbuilder.com - product

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('product');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ProductSchema = new Schema(
    {
      name: {
        type: String,
      },

      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
        required: true,
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  ProductSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  ProductSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ProductSchema.set('toJSON', {
    getters: true,
  });

  ProductSchema.set('toObject', {
    getters: true,
  });

  return database.model('product', ProductSchema);
};
/// File is generated from https://studio.fabbuilder.com - product
