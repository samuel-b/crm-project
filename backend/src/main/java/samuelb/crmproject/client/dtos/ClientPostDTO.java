package samuelb.crmproject.client.dtos;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;

public class ClientPostDTO {
	
	@NotBlank
	private String lastName;
	@NotBlank
	private String firstName;
	@NotBlank
	private String email;
	@NotBlank
	private String phone;
	@NotBlank
	private String country;
	@NotBlank
	private String state;
	
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	
	public ClientPostDTO(String lastName, String firstName, String email, String phone, String country, String state) {
		super();
		this.lastName = lastName;
		this.firstName = firstName;
		this.email = email;
		this.phone = phone;
		this.country = country;
		this.state = state;
	}
	
	
	

}
