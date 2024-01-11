package com.future.my.api;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Class Name  : MessageController
 * Author      : 202-PC
 * Created Date: 2023. 11. 8.
 * Version: 1.0
 * Purpose:   
 * Description: 기능 간략한설명
 */
@RestController
@RequestMapping("/api")
public class MessageController {

    @GetMapping("/messages")
    public ResponseEntity<List<String>> getMessages() {
        List<String> messages = Arrays.asList("Hello", "World", "From", "Spring MVC");
        System.out.print("요청옴");
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }
}
