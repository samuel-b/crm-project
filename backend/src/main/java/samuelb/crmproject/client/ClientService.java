package samuelb.crmproject.client;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import samuelb.crmproject.client.dtos.ClientPatchDTO;
import samuelb.crmproject.client.dtos.ClientPostDTO;

@Service
@Transactional
public class ClientService {
	
	@Autowired ClientRepository repository;
	
	public ClientEntity create(ClientPostDTO data) {
		ClientEntity client = new ClientEntity();
		
		client.setLastName(data.getLastName());
		client.setFirstName(data.getFirstName());
		client.setEmail(data.getEmail());
		client.setPhone(data.getPhone());
		client.setCountry(data.getCountry());
		client.setState(data.getState());
		
		return this.repository.save(client);
	}
	
	public List<ClientEntity> all(){
		return this.repository.findAll();
	}
	
	public Optional<ClientEntity> find(Long id) {
		return this.repository.findById(id);
	}
	
	public Optional<ClientEntity> update(Long id, ClientPatchDTO data) {
		Optional<ClientEntity> maybeClient = this.repository.findById(id);
		
		if (maybeClient.isEmpty()) {
			return maybeClient;
		}
		
		ClientEntity client = maybeClient.get();
		
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
		
		
		client = this.repository.save(client);
		
		return Optional.of(client);
	}
	
	public Boolean delete(Long id) {
		Boolean exists = this.repository.existsById(id);
		
		if (!exists) {
			return false;
		}
		
		this.repository.deleteById(id);
		return true;
	}

}
