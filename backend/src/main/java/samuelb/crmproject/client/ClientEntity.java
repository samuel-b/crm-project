package samuelb.crmproject.client;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity //Marks class as an entity.
@Table(name = "clients") //Specifies table name.
public class ClientEntity implements Serializable {
	
	@Id //Marks the primary key of an entity.
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Generates ID value.
	private Long id;
	
	//Marks the columns of an entity.
	@Column
	private String lastName;
	@Column
	private String firstName;
	@Column
	private String email;
	@Column
	private String phone;
	@Column
	private String country;
	@Column
	private String state;
	
	//GETTERS AND SETTERS
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
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
	
	//CONSTRUCTORS
	
	public ClientEntity() {}
	
	public ClientEntity(Long id, String lastName, String firstName, String email, String phone, String country,
			String state) {
		super();
		this.id = id;
		this.lastName = lastName;
		this.firstName = firstName;
		this.email = email;
		this.phone = phone;
		this.country = country;
		this.state = state;
	}
	
	
	
	
	

}
