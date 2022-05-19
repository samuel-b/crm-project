package samuelb.crmproject.client;

import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import samuelb.crmproject.client.dtos.ClientPatchDTO;
import samuelb.crmproject.client.dtos.ClientPostDTO;

@RestController //Marks the class as a rest controller.
@RequestMapping(value = "/api/v1/clients") //Base path.
public class ClientController {
	
	//Injection of service provider into rest controller. 
	@Autowired ClientService service;
	
	@PostMapping
	public ResponseEntity<ClientEntity> create (@Valid @RequestBody ClientPostDTO data) {
		//Creates a new instance of the entity and assigns it the values of the 
		//service provider create method
		ClientEntity client = this.service.create(data);
		
		//Returns a new response entity, with the client as the body and http status code.
		return new ResponseEntity<>(client, HttpStatus.OK);
	}

	@CrossOrigin //Required to fetch from front-end localhost on another port.
	@GetMapping
	public List<ClientEntity> all(){
		//Returns the value of the all method in the service provider (List of entities)
		return this.service.all();
	}
	
	@GetMapping(value = "{id}") //builds on base path.
	public ResponseEntity<ClientEntity> find(@PathVariable Long id){
		//Creates a new instance of the entity based on the id. 
		Optional<ClientEntity> maybeClient = this.service.find(id);
		
		//If there is no existing entity with a matching id, return a response entity
		//with a null body and not_found http code
		if (maybeClient.isEmpty()) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		
		//Otherwise return a response entity with the body of the entity and OK http code.
		return new ResponseEntity<>(maybeClient.get(), HttpStatus.OK);
	}
	
	@PatchMapping(value = "{id}") //builds on base path.
	public ResponseEntity<ClientEntity> update(@PathVariable Long id, @RequestBody ClientPatchDTO data) {
		//Creates a new instance of the entity based on the id and request body of dto.
		Optional<ClientEntity> maybeClient = this.service.update(id, data);
		
		//If there is no existing entity with a matching id, return a response entity
		//with a null body and not_found http code
		if (maybeClient.isEmpty()) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		
		//Otherwise return a response entity with the body of the entity and OK http code.
		return new ResponseEntity<>(maybeClient.get(), HttpStatus.OK);
	}
	
	@DeleteMapping(value = "{id}") //builds on base path.
	public ResponseEntity delete(@PathVariable Long id) {
		//the value of the delete method (true if id exists)
		Boolean found = this.service.delete(id);
		
		//If the value is equal to false, return a response entity with a null body and http code.
		if (!found) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		//Otherwise it is deleted by the service method and returns a null body and relevant http code.
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}

}
