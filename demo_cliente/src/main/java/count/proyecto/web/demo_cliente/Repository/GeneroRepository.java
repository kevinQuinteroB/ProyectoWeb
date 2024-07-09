package count.proyecto.web.demo_cliente.Repository;

import count.proyecto.web.demo_cliente.Models.Genero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GeneroRepository extends JpaRepository<Genero, Long> {
}
