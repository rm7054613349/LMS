import 'package:get/get.dart';
import '../models/autocomplete_model.dart';

import '../models/productModel.dart';
import '../services/productService.dart';

class ProductController extends GetxController {

  Future<ProductListModel> fetchList({
    required int limit,
    required int offset,
    String? orderBy,
  }) async {
    
    ProductService service = ProductService();
    ProductListModel listModel = await service.list(limit:limit,offset:offset, orderBy:orderBy);
    
    return listModel;
  }

  Future<ProductModel> fetchById({
    required String id
  }) async {
   ProductService service = ProductService();
    ProductModel model = await service.find(id:id);
    return model;
  }

  Future<ProductModel> create(Map<String,dynamic> model) async {
    ProductService service = ProductService();
    ProductModel savedModel = await service.create(model);
    return savedModel;
  }

  Future<ProductModel> updateData(String id, Map<String,dynamic> model) async {
    ProductService service = ProductService();
    ProductModel savedModel = await service.update(id, model);
    return savedModel;
  }

  Future<List<AutocompleteModel>> autocomplete(String pattern) async {
    ProductService service = ProductService();
    List<AutocompleteModel> suggestions = await service.autocomplete(pattern);
    return suggestions;
  }
}