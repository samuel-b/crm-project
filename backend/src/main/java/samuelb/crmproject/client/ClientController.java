package samuelb.crmproject.client;

import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

@RestController
@RequestMapping(value = "/api/v1/clients")
public class ClientController {
	
	@Autowired ClientService service;
	
	@PostMapping
	public ResponseEntity<ClientEntity> create (@Valid @RequestBody ClientPostDTO data) {
		ClientEntity client = this.service.create(data);
		
		return new ResponseEntity<>(client, HttpStatus.OK);
	}

	
	@GetMapping
	public List<ClientEntity> all(){
		return this.service.all();
	}
	
	@GetMapping(value = "{id}")
	public ResponseEntity<ClientEntity> find(@PathVariable Long id){
		Optional<ClientEntity> maybeClient = this.service.find(id);
		
		if (maybeClient.isEmpty()) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<>(maybeClient.get(), HttpStatus.OK);
	}
	
	@PatchMapping(value = "{id}")
	public ResponseEntity<ClientEntity> update(@PathVariable Long id, @RequestBody ClientPatchDTO data) {
		Optional<ClientEntity> maybeClient = this.service.update(id, data);
		
		if (maybeClient.isEmpty()) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<>(maybeClient.get(), HttpStatus.OK);
	}
	
	@DeleteMapping(value = "{id}")
	public ResponseEntity delete(@PathVariable Long id) {
		Boolean found = this.service.delete(id);
		
		if (!found) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}

}
