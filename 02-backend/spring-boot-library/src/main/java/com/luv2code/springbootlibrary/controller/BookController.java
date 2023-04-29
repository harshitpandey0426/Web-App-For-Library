package com.luv2code.springbootlibrary.controller;


import com.luv2code.springbootlibrary.entity.Book;
import com.luv2code.springbootlibrary.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/books")
public class BookController {
    private BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/secure/ischeckedout/byuser")
    public Boolean checkoutBookByUser(
                                      @RequestParam Long bookId) {
        String userEmail = "harshitpandey0426@gmail.com";
        return bookService.checkoutBookByUser(userEmail, bookId);
    }
    @PutMapping("/secure/checkout")
    public Book checkoutBook (@RequestParam Long bookId) throws Exception {
        String userEmail = "harshitpandey0426@gmail.com";
        return bookService.checkoutBook(userEmail, bookId);
    }
}
