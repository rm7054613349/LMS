

class ProductListModel {
  int? offset;
  int? limit;
  int count = 0;
  List<ProductModel> rows = [];

  ProductListModel(
      {this.offset, this.limit, required this.count, required this.rows});

  ProductListModel.fromJson(Map<String, dynamic> json) {
    offset = json['offset'];
    limit = json['limit'];
    count = json['count'];
    if (json['rows'] != null) {
      rows = <ProductModel>[];
      json['rows'].forEach((v) {
        rows!.add(ProductModel.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['offset'] = offset;
    data['limit'] = limit;
    data['count'] = count;
    if (rows != null) {
      data['rows'] = rows!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class ProductModel {
  String? id;
            String? name;


  ProductModel({
    this.id,
        this.name,    });

  ProductModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
         name= json['name'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
      data['id'] = id;  
          data['name'] = name;
        
    return data;
  }
}