package count.proyecto.web.demo_cliente.Repository;

import count.proyecto.web.demo_cliente.Models.Comentario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ComentarioRepository extends JpaRepository<Comentario, Long> {
    @Query(value = "SELECT * FROM Comentario WHERE id_juego = :id_juego" , nativeQuery = true)
    Comentario findByid_juego(Long id_juego);
}
