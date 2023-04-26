"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var SpinnerLoading_1 = require("./../Utils/SpinnerLoading");
var SearchBook_1 = require("./Components/SearchBook");
var Pagination_1 = require("../Utils/Pagination");
function SearchBookPage() {
    var _this = this;
    var _a = react_2.useState([]), books = _a[0], setBooks = _a[1];
    var _b = react_2.useState(true), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_2.useState(null), httpError = _c[0], setHttpError = _c[1];
    var _d = react_2.useState(1), currentPage = _d[0], setCurrentPage = _d[1];
    var booksPerPage = react_2.useState(5)[0];
    var _e = react_2.useState(0), totalAmountOfBooks = _e[0], setTotalAmountOfBooks = _e[1];
    var _f = react_2.useState(0), totalPages = _f[0], setTotalPages = _f[1];
    var _g = react_2.useState(''), search = _g[0], setSearch = _g[1];
    var _h = react_2.useState(''), searchUrl = _h[0], setSearchUrl = _h[1];
    var _j = react_2.useState('Book category'), categorySelection = _j[0], setCategorySelection = _j[1];
    react_2.useEffect(function () {
        var fetchBooks = function () { return __awaiter(_this, void 0, void 0, function () {
            var baseUrl, url, searchWithPage, response, responseJson, responseData, loadedBooks, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        baseUrl = "http://localhost:8080/api/books";
                        url = '';
                        if (searchUrl === '') {
                            url = baseUrl + "?page=" + (currentPage - 1) + "&size=" + booksPerPage;
                        }
                        else {
                            searchWithPage = searchUrl.replace('<pageNumber>', "" + (currentPage - 1));
                            url = baseUrl + searchWithPage;
                        }
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error('Something went wrong!');
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        responseJson = _a.sent();
                        responseData = responseJson._embedded.books;
                        setTotalAmountOfBooks(responseJson.page.totalElements);
                        setTotalPages(responseJson.page.totalPages);
                        loadedBooks = [];
                        for (key in responseData) {
                            loadedBooks.push({
                                id: responseData[key].id,
                                title: responseData[key].title,
                                author: responseData[key].author,
                                description: responseData[key].description,
                                copies: responseData[key].copies,
                                copiesAvailable: responseData[key].copiesAvailable,
                                category: responseData[key].category,
                                img: responseData[key].img
                            });
                        }
                        setBooks(loadedBooks);
                        setIsLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchBooks()["catch"](function (error) {
            setIsLoading(false);
            setHttpError(error.message);
        });
        window.scrollTo(0, 0);
    }, [currentPage, searchUrl]);
    if (isLoading) {
        return (react_1["default"].createElement(SpinnerLoading_1["default"], null));
    }
    if (httpError) {
        return (react_1["default"].createElement("div", { className: 'container m-5' },
            react_1["default"].createElement("p", null, httpError)));
    }
    var searchHandleChange = function () {
        setCurrentPage(1);
        if (search === '') {
            setSearchUrl('');
        }
        else {
            setSearchUrl("/search/findByTitleContaining?title=" + search + "&page=<pageNumber>&size=" + booksPerPage);
        }
        setCategorySelection('Book category');
    };
    var categoryField = function (value) {
        setCurrentPage(1);
        if (value.toLowerCase() === 'fe' ||
            value.toLowerCase() === 'be' ||
            value.toLowerCase() === 'data' ||
            value.toLowerCase() === 'devops') {
            setCategorySelection(value);
            setSearchUrl("/search/findByCategory?category=" + value + "&page=<pageNumber>&size=" + booksPerPage);
        }
        else {
            setCategorySelection('All');
            setSearchUrl("?page=<pageNumber>&size=" + booksPerPage);
        }
    };
    var indexOfLastBook = currentPage * booksPerPage;
    var indexOfFirstBook = indexOfLastBook - booksPerPage;
    var lastItem = booksPerPage * currentPage <= totalAmountOfBooks ?
        booksPerPage * currentPage : totalAmountOfBooks;
    var paginate = function (pageNumber) { return setCurrentPage(pageNumber); };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: 'container' },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: 'row mt-5' },
                    react_1["default"].createElement("div", { className: 'col-6' },
                        react_1["default"].createElement("div", { className: 'd-flex' },
                            react_1["default"].createElement("input", { className: 'form-control me-2', type: 'search', placeholder: 'Search', "aria-labelledby": 'Search', onChange: function (e) { return setSearch(e.target.value); } }),
                            react_1["default"].createElement("button", { className: 'btn btn-outline-success', onClick: function () { return searchHandleChange(); } }, "Search"))),
                    react_1["default"].createElement("div", { className: 'col-4' },
                        react_1["default"].createElement("div", { className: 'dropdown' },
                            react_1["default"].createElement("button", { className: 'btn btn-secondary dropdown-toggle', type: 'button', id: 'dropdownMenuButton1', "data-bs-toggle": 'dropdown', "aria-expanded": 'false' }, categorySelection),
                            react_1["default"].createElement("ul", { className: 'dropdown-menu', "aria-labelledby": 'dropdownMenuButton1' },
                                react_1["default"].createElement("li", { onClick: function () { return categoryField('All'); } },
                                    react_1["default"].createElement("a", { className: 'dropdown-item', href: '#' }, "All")),
                                react_1["default"].createElement("li", { onClick: function () { return categoryField('FE'); } },
                                    react_1["default"].createElement("a", { className: 'dropdown-item', href: '#' }, "Front End")),
                                react_1["default"].createElement("li", { onClick: function () { return categoryField('BE'); } },
                                    react_1["default"].createElement("a", { className: 'dropdown-item', href: '#' }, "Back End")),
                                react_1["default"].createElement("li", { onClick: function () { return categoryField('Data'); } },
                                    react_1["default"].createElement("a", { className: 'dropdown-item', href: '#' }, "Data")),
                                react_1["default"].createElement("li", { onClick: function () { return categoryField('DevOps'); } },
                                    react_1["default"].createElement("a", { className: 'dropdown-item', href: '#' }, "DevOps")))))),
                totalAmountOfBooks > 0 ?
                    react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement("div", { className: 'mt-3' },
                            react_1["default"].createElement("h5", null,
                                "Number of results: (",
                                totalAmountOfBooks,
                                ")")),
                        react_1["default"].createElement("p", null,
                            indexOfFirstBook + 1,
                            " to ",
                            lastItem,
                            " of ",
                            totalAmountOfBooks,
                            " items:"),
                        books.map(function (book) { return (react_1["default"].createElement(SearchBook_1["default"], { book: book, key: book.id })); }))
                    :
                        react_1["default"].createElement("div", { className: 'm-5' },
                            react_1["default"].createElement("h3", null, "Can't find what you are looking for?"),
                            react_1["default"].createElement("a", { type: 'button', className: 'btn main-color btn-md px-4 me-md-2 fw-bold text-white', href: '#' }, "Library Services")),
                totalPages > 1 &&
                    react_1["default"].createElement(Pagination_1["default"], { currentPage: currentPage, totalPages: totalPages, paginate: paginate })))));
}
exports["default"] = SearchBookPage;
