package samuelb.crmproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import springfox.documentation.swagger2.annotations.EnableSwagger2;


@SpringBootApplication
@EnableSwagger2
public class CrmProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrmProjectApplication.class, args);
	}

}
