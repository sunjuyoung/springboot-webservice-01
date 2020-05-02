package com.test.book.springboot.domain.posts;


import org.springframework.data.jpa.repository.JpaRepository;

//JpaRepository<Entity클래스,Pk타입>상속하면 기본적인 CRUD메소드가 자동으로 생성
//Entity클래스와 함께위치해야한다
public interface PostsRepository extends JpaRepository<Posts,Long> {


}
