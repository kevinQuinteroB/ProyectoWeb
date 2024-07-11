package count.proyecto.web.demo_cliente.Repository;

import count.proyecto.web.demo_cliente.Models.Valoracion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ValoracionRepository extends JpaRepository<Valoracion, Long> {
    @Query(value = "SELECT * FROM Valoracion WHERE id_juego = :id_juego", nativeQuery = true)
    List<Valoracion> findByid_juego(Long id_juego);
}
