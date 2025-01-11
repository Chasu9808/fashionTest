package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/") // 루트 URL로 접속하면 메인 페이지로 이동
    public String mainPage() {
        return "main"; // templates/main.html 파일을 반환
    }
}
