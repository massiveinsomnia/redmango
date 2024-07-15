- timpa dependencies package json ngikutin dari course (nggak terlalu jauh beda versi)
- npm install buat install semua yang ada di dependencies
- npm i bootsrap@5.2.3 dan npm i bootstrap-icons
- bikin Header dan Footer components, bikin index.ts component di folder Component/Layout buat nampung semua component dalem folder layout dan export semua yang perlu
  navigation panel ambil template dari bootstrap nav bar
- fetch menu item pas render pertama kali di App.tsx, bikin Interface/Model di Interfaces folder yang isinya component menuItemModel untuk nentuin tipe object yang lagi digunakan.
  contoh disini useState setMenuItem array, isi component menuItemModel adalah hasil convert object JSON ke TS. ambil dari satu object hasil fecth API, contoh dari https://localhost:7084/api/MenuItem > Raw Data > ambil satu object contoh :
  {"id":1,"name":"Spring Roll","description":"Fusc tincidunt maximus leo, sed scelerisque massa auctor sit amet. Donec ex mauris, hendrerit quis nibh ac, efficitur fringilla enim.","specialTag":"","category":"Appetizer","price":7.99,"image":"../Images/spring roll.jpg"}
  object ini paste ke converter JSON to TS (https://json2ts.dev/), yang nantinya bakal balikin hasilnya seperti di component menuItemModel
- bikin component (pages) Home.tsx, terus bikin folder Page + MenuItems + component MenuItemList di dalem folder Components, component MenuItemCard di folder Components > MenuItems
- bikin local inteface di component MenuItemCard, install npm i react-router-dom
- terus bikin component NotFound, MenuItemDetails di Pages folder, terus install = npm install @reduxjs/toolkit react-redux
- bikin store component buat mempermudah akses cross component (where we will manage all the slice), bikin di folder src > Storage, dan bikin component slice pertama untuk menu item di folder redux > menuItemSlice component. terus add redux ke app root level di index.tsx add provider
- bikin folder Apis dan bikin component menuItemApi, daftarin menuItemApi ke component store, next di component MenuItemList ganti cara fetch API nya ambil dari store
- bikin component shoppingCartApi di folder Apis terus import shoppingCart ke store component, dan tambah fungsi add item to cart di component MenuItemDetails dan di component
  MenuItemCard tapi quantity yang di set hanya 1
- bikin component di folder baru Page > Common. MiniLoader untuk component MenuItemCard pas di bagian icon cart dan MenuItemDetails pas di bagian button add to cart, dan MainLoader di component MenuItemDetails & MenuItemList pas bagian conditional rendering pas lagi loading
- bikin shoppingCartModel dan cartItemModel di Interfaces folder terus bikin shoppingCartSlice di folder Redux dan tambahin slice nya ke component store di folder Redux.
  implementasi fetch cartItems nya di component App folder Container
- bikin ShoppingCart component di folder Pages dan setup route di App component, terus bikin component CartSummary di folder Page > Cart
- tambahin method updateQuantity dan removeFromCart di shoppingCartSlice dan tambahin fungsi method nya ke component CartSummary. terus tambahin fungsi tembak ke API buat update ke database, karena kalo proses ini dilewatin tiap refresh atau balik ke page data nya balik lagi sesuai yg ada di DB
- tambahin fungsi itung jumlah item dalam cart dan ditampilin di header navbar, perubahan di component Header
- bikin component CartPickUpDetails di folder Page > Cart untuk nampilin informasi si penerima dan nampilin total item dan grand total dari semua item di dalam cart. dari tiga inputan tadi dibikin fungsi controlled component nya juga dan helper method nya di folder Helper component inputHelper. Dan tambahin fungsi loading pas order di submit
- bikin Register dan Login component di folder Pages dan tambahin ke route di App component terus tambahin url nya ke Header component. Bikin component authApi di folder Apis dan tambahin reducer nya ke component Store dalam folder Redux. next bikin slice userAuthSlice di dalam folder Redux dan bikin interfaces nya juga = userModel dan tambahin userAuthStore nya ke component Store.
- bikin folder baru Utility dan bikin component SD (Static Detail), terus bikin component apiResponse di folder Interfaces
