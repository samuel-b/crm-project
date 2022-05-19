package samuelb.crmproject.client;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import samuelb.crmproject.client.dtos.ClientPatchDTO;
import samuelb.crmproject.client.dtos.ClientPostDTO;

@Service //Marks the class as a service provider.
@Transactional
public class ClientService {
	
	//Injection of repository into service provider. 
	@Autowired ClientRepository repository;
	
	//Create method.
	public ClientEntity create(ClientPostDTO data) {
		//Creates a new instance of entity.
		ClientEntity client = new ClientEntity();
		
		//Uses the entity classes set methods to the value received from the dto/payload.
		client.setLastName(data.getLastName());
		client.setFirstName(data.getFirstName());
		client.setEmail(data.getEmail());
		client.setPhone(data.getPhone());
		client.setCountry(data.getCountry());
		client.setState(data.getState());
		//After values are set, save to database.
		return this.repository.save(client);
	}
	
	//Read (all)
	public List<ClientEntity> all(){
		//Returns a list of all entities.
		return this.repository.findAll();
	}
	
	//Read (single)
	public Optional<ClientEntity> find(Long id) {
		//Returns a single entity that matches the id.
		return this.repository.findById(id);
	}
	
	//Update method, optional is used because it may or may not return an entity)
	public Optional<ClientEntity> update(Long id, ClientPatchDTO data) {
		//Creates a new instance of the entity based on the id. 
		Optional<ClientEntity> maybeClient = this.repository.findById(id);
		
		//If there is no existing entity with a matching id, return.
		if (maybeClient.isEmpty()) {
			return maybeClient;
		}
		
		//Will only execute if there is a an existing entity with a matching id.
		ClientEntity client = maybeClient.get();
		
		//If the value in the request body is not value, re-assign the new value.
		if (data.getLastName() != null) {
			client.setLastName(data.getLastName());
		}
		
		if (data.getFirstName() != null) {
			client.setFirstName(data.getFirstName());
		}
		
		if (data.getEmail() != null) {
			client.setEmail(data.getEmail());
		}
		
		if (data.getPhone() != null) {
			client.setPhone(data.getPhone());
		}
		
		if (data.getCountry() != null) {
			client.setCountry(data.getCountry());
		}
		
		if (data.getState() != null) {
			client.setState(data.getState());
		}
		
		//After value has been re-assigned save it to the database.
		client = this.repository.save(client);
		
		return Optional.of(client);
	}
	
	//Delete method.
	public Boolean delete(Long id) {
		//Boolean that is assigned the value of true if the id matches an exiting entity.
		Boolean exists = this.repository.existsById(id);
		
		//If above is false, return false.
		if (!exists) {
			return false;
		}
		
		//Otherwise delete it and return true.
		this.repository.deleteById(id);
		return true;
	}

}
