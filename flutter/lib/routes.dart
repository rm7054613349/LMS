import 'package:get/get.dart';
import '/screens/splash.dart';
import '/screens/auth/authScreen.dart';
import '/screens/dashboard/basicDashboardScreen.dart';

import '/screens/product/productListScreen.dart';

import '/screens/product/table/productTableScreen.dart';
import '/screens/product/form/productFormScreen.dart';
AppRoutes() => [
    GetPage(
        name: '/splash',
        page: () => SplashScreen(),
        transition: Transition.leftToRightWithFade,
        transitionDuration: const Duration(milliseconds: 500),
    ),
    GetPage(
        name: '/auth',
        page: () => AuthScreen(),
        transition: Transition.leftToRightWithFade,
        transitionDuration: const Duration(milliseconds: 500),
    ),
    GetPage(
        name: '/dashboard',
        page: () => BasicDashboardScreen(),
        transition: Transition.leftToRightWithFade,
        transitionDuration: const Duration(milliseconds: 500),
    ), 
    GetPage(
            name: '/productList',
            page: () => ProductListScreen(),
            transition: Transition.leftToRightWithFade,
            transitionDuration: const Duration(milliseconds: 500),
        ),
    GetPage(
            name: '/productTable',
            page: () => ProductTableScreen(),
            transition: Transition.leftToRightWithFade,
            transitionDuration: const Duration(milliseconds: 500),
        ),

    GetPage(
        name: '/productForm',
        page: () => ProductFormScreen(),
        transition: Transition.leftToRightWithFade,
        transitionDuration: const Duration(milliseconds: 500),
    ),
];