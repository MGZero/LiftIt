package com.lift_it;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.stereotype.*;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@EnableAutoConfiguration(exclude = { 
        org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration.class 
})
public class Application extends SpringBootServletInitializer {

    /*@RequestMapping("/")
    String home() {
        return "Hello World!";
    }*/

	@RequestMapping("/")
    public String greeting(Model model) {
        return "lifIt/index";
    }
	
    public static void main(String[] args){
        SpringApplication.run(Application.class, args);
    }
    
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }

}