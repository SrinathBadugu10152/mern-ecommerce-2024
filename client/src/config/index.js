export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "tablets", label: "Tablets" },
      { id: "powder", label: "Powder" },
      { id: "syrups", label: "Syrups" },
      { id: "injections", label: "Injections" },
      { id: "other", label: "Others" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "drreddys", label: "Dr Reddy's" },
      { id: "cipla", label: "Cipla" },
      { id: "sunpharmaceutical", label: "Sun Pharmaceutical" },
      { id: "divi", label: "Divi's" },
      { id: "mankind", label: "Mankind" },
      { id: "ajantapharma", label: "Ajanta Pharma" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "tablets",
    label: "Tablets",
    path: "/shop/listing",
  },
  {
    id: "powder",
    label: "Powder",
    path: "/shop/listing",
  },
  {
    id: "syrups",
    label: "Syrups",
    path: "/shop/listing",
  },
  {
    id: "injections",
    label: "Injections",
    path: "/shop/listing",
  },
  {
    id: "other",
    label: "Others",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  tablets: "Tablets",
  powder: "Powder",
  syrups: "Syrups",
  injections: "Injections",
  other: "Others",
};

export const brandOptionsMap = {
  drreddys: "Dr Reddy's",
  cipla: "Cipla",
  sunpharmaceutical: "Sun Pharmaceutical",
  divi: "Divi's",
  mankind: "Mankind",
  "ajantapharma": "Ajanta Pharma",
};

export const filterOptions = {
  category: [
    { id: "tablets", label: "Tablets" },
    { id: "powder", label: "Powder" },
    { id: "syrups", label: "Syrups" },
    { id: "injections", label: "Injections" },
    { id: "other", label: "Others" },
  ],
  brand: [
    { id: "drreddys", label: "Dr Reddy's" },
    { id: "cipla", label: "Cipla" },
    { id: "sunpharmaceutical", label: "Sun Pharmaceutical" },
    { id: "divi", label: "Divi's" },
    { id: "mankind", label: "Mankind" },
    { id: "ajantapharma", label: "Ajanta Pharma" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
