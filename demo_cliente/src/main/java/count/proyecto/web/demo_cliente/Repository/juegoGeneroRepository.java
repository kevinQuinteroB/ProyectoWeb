package count.proyecto.web.demo_cliente.Repository;

import count.proyecto.web.demo_cliente.Models.juegoGenero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface juegoGeneroRepository extends JpaRepository<juegoGenero, Long> {
    @Query(value = "SELECT * FROM juego_genero WHERE id_juego = :id_juego", nativeQuery = true)
    List<juegoGenero> findByid_juego(Long id_juego);
}

