package com.luv2code.springbootlibrary.dao;

import com.luv2code.springbootlibrary.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface BookRepository extends JpaRepository<Book, Long> {
    // spring follows naming convention and this method should also follow that convention
    Page<Book> findByTitleContaining(@RequestParam("title") String title, Pageable Pageable);
    Page<Book> findByCategory(@RequestParam("category") String category, Pageable Pageable);
}
