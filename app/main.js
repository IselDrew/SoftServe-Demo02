import { AnimalController } from "./components/Animal/AnimalController.js";
import { SearchFilterController } from "./components/SearchFilter/SearchFilterController.js";
import { Publisher } from "./helper/Publisher.js";
import { SortController } from "./components/Sort/SortController.js";
import { PaginationController } from "./components/Pagination/PaginationController.js";

const publisher = new Publisher();
const animal = new AnimalController(publisher.methods);
const search = new SearchFilterController(publisher.methods);
const sort = new SortController(publisher.methods);
const pagination = new PaginationController(publisher.methods);
