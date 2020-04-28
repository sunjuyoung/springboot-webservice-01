package com.test.book.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//메인 클래스

//스프링 자동설정,Bean 읽기 생성
@SpringBootApplication
public class Application {
    public static void main (String[] args){

        //내장 WAS실행
        SpringApplication.run(Application.class,args);



    }
}
