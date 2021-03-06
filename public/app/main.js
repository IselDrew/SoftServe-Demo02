import { AnimalController } from "./components/Animal/AnimalController.js";
import { SearchFilterController } from "./components/SearchFilter/SearchFilterController.js";
import { Publisher } from "./helper/Publisher.js";
import { SortController } from "./components/Sort/SortController.js";
import { PaginationController } from "./components/Pagination/PaginationController.js";
import { CartController } from "./components/Cart/CartController.js";
import { OrderHistoryController } from "./components/OrderHistory/OrderHistoryController.js";
import { OrderFormController } from "./components/OrderForm/OrderFormController.js";
import { QueryBuilder } from "./helper/Builder.js";
import { DetailsController } from "./components/Details/DetailsController.js";

const queryBuilder = new QueryBuilder();
const publisher = new Publisher();
const animal = new AnimalController(publisher.methods, queryBuilder);
const details = new DetailsController(publisher.methods);
const search = new SearchFilterController(publisher.methods);
const sort = new SortController(publisher.methods);
const pagination = new PaginationController(publisher.methods);
const cart = new CartController(publisher.methods);
const orderFrom = new OrderFormController(publisher.methods);
const orderHistory = new OrderHistoryController();
