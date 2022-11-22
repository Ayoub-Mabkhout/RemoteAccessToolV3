package com.RemoteAccessTool;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class RemoteAccessToolApplication {

	public static void main(String[] args) {
		SpringApplicationBuilder builder = new SpringApplicationBuilder(RemoteAccessToolApplication.class);
		builder.headless(false);
		ConfigurableApplicationContext context = builder.run(args);
		// SpringApplication.run(RemoteAccessToolApplication.class, args);

	}

}
