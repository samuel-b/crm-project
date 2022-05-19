package samuelb.crmproject.client;

import org.springframework.data.jpa.repository.JpaRepository;

//T: Domain type that repository manages (Entity Name)
//ID: Type of the id of the entity that repository manages (Entity ID Datatype)
public interface ClientRepository extends JpaRepository<ClientEntity, Long>{

}
