package count.proyecto.web.demo_cliente.Repository;

import count.proyecto.web.demo_cliente.Models.JuegoGenero;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface juegoGeneroRepository extends JpaRepository<JuegoGenero, Long> {
    @Query(value = "SELECT * FROM juego_genero WHERE id_juego = :id_Juego", nativeQuery = true)
    List<JuegoGenero> findByid_juego(Long id_Juego);
}

