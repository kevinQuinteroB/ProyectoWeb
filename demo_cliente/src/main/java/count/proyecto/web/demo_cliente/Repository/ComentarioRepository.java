package count.proyecto.web.demo_cliente.Repository;

import count.proyecto.web.demo_cliente.Models.Comentario;
import count.proyecto.web.demo_cliente.Models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface ComentarioRepository extends JpaRepository<Comentario, Long> {
    @Query(value = "SELECT * FROM comentario WHERE juego_id = :juegoId", nativeQuery = true)
    List<Comentario> findByJuegoId(Long juegoId);
}