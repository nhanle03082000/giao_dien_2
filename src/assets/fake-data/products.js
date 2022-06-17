const product_01_image_01 = require("../images/products/sony.jpg").default;
const product_01_image_02 = require("../images/products/sony2.jpg").default;
const product_02_image_01 = require("../images/products/sony3.jpg").default;
const product_02_image_02 = require("../images/products/sony4.jpg").default;

const product_03_image_01 = require("../images/products/chen1.jpg").default;
const product_03_image_02 = require("../images/products/chen2.jpg").default;

const product_04_image_01 =
  require("../images/products/product-04 (1).jpg").default;
const product_04_image_02 =
  require("../images/products/product-04 (2).jpg").default;

const products = [
  {
    title: "Tai Nghe Sony Chính Hãng",
    image01: product_01_image_01,
    image02: product_01_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange"],
    slug: "tai-nghe-sony-1",
    size: ["s", "m", "l", "xl"],
    description:
      "Tai nghe được xem là một trong những thiết bị có tính năng nghe nhạc từ các thiết bị phát ra như máy tính bàn, laptop, điện thoại, ipad. Do đó, nó sở hữu riêng cho mình những chức năng riêng biệt và có hai mục đích sử dụng chính. Thứ nhất tai nghe dùng để nghe nhạc đã được tối ưu hóa cho việc nghe nhạc nên rất nhỏ gọn, được trang bị công nghệ để cân bằng các dải, với âm thoáng cũng như độ chi tiết cao nhất. Thứ hai tai nghe dùng cho xem phim hay chơi game thường là loại full size hay over ear, thường có mic để có thể chat thoại ở trong game, nếu như các loại tai nghe chính hãng thuộc dòng cao cấp sẽ có thêm driver để điều khiển riêng cho từng bên tai một. Do đó, các loại tai nghe đóng một vai trò hết sức quan trọng đối với con người, đây là một phụ kiện luôn đi kèm với người dùng mọi lúc, mọi nơi, mọi địa điểm khác nhau.",
  },
  {
    title: "Tai Nghe Không Dây",
    image01: product_02_image_01,
    image02: product_02_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "red", "blue"],
    slug: "tai-nghe-sony-2",
    size: ["s", "m"],
    description:
      "Tai nghe được xem là một trong những thiết bị có tính năng nghe nhạc từ các thiết bị phát ra như máy tính bàn, laptop, điện thoại, ipad. Do đó, nó sở hữu riêng cho mình những chức năng riêng biệt và có hai mục đích sử dụng chính. Thứ nhất tai nghe dùng để nghe nhạc đã được tối ưu hóa cho việc nghe nhạc nên rất nhỏ gọn, được trang bị công nghệ để cân bằng các dải, với âm thoáng cũng như độ chi tiết cao nhất. Thứ hai tai nghe dùng cho xem phim hay chơi game thường là loại full size hay over ear, thường có mic để có thể chat thoại ở trong game, nếu như các loại tai nghe chính hãng thuộc dòng cao cấp sẽ có thêm driver để điều khiển riêng cho từng bên tai một. Do đó, các loại tai nghe đóng một vai trò hết sức quan trọng đối với con người, đây là một phụ kiện luôn đi kèm với người dùng mọi lúc, mọi nơi, mọi địa điểm khác nhau.",
  },
  {
    title: "Bộ Ấm Chén Cổ",
    image01: product_03_image_01,
    image02: product_03_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange", "yellow"],
    slug: "am-chen-co-1",
    size: ["m"],
    description:
      "Bộ tách trà Minh Long là một trong những dòng sản phẩm về gốm sứ được khách hàng ưa chuộng nhất hiện nay. Đa phần các bộ tách trà gốm sứ Minh Long đều mang phong cách cổ điển hòa lẫn với phong cách hiện đại rất phù hợp với thiết kế đương thời. Gốm sứ Hoàng gia chuyên cung cấp bộ ấm chén uống trà cao cấp với nhiều kiểu dáng, hoa văn phong phú bên cạnh đó chất lượng rất tốt so với giá thành. Bộ ấm trà giá rẻ gốm sứ Minh Long phù hợp sử dụng trong các hộ gia đình, nhà hàng, khách sạn cao cấp, ngoài ra còn có thể dùng làm quà tặng, uống trà, tặng phẩm. Để giúp bạn hiểu nhiều hơn về bộ ấm trà sứ trắng, bài viết sau của chúng tôi sẽ cung cấp đến bạn những thông tin cũng như những hình ảnh đẹp, chất lượng về bộ sản để bạn có thể tham khảo",
  },

  // 18 products
];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const getProductBySlug = (slug) => products.find((e) => e.slug === slug);

const getCartItemsInfo = (cartItems) => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach((e) => {
      let product = getProductBySlug(e.slug);
      res.push({
        ...e,
        product: product,
      });
    });
  }
  // console.log(res)
  // console.log('sorted')
  // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
  return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
};

const productData = {
  getAllProducts,
  getProducts,
  getProductBySlug,
  getCartItemsInfo,
};

export default productData;
