
import 'package:get/get.dart';
import 'controllers/auth_controller.dart';

import 'controllers/productController.dart';
class AppBinding implements Bindings {
  @override
  void dependencies() {
    Get.put(AuthenticationController(), permanent: true);

    Get.put(ProductController(), permanent: true);  }
}