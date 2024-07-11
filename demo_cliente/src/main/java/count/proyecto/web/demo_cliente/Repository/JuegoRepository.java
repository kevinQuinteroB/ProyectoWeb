package count.proyecto.web.demo_cliente.Repository;

import count.proyecto.web.demo_cliente.Models.Juego;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface JuegoRepository extends JpaRepository<Juego, Long> {

    @Query(value = "SELECT * FROM juego WHERE id_juego = :idJuego", nativeQuery = true)
    Juego findByIdGame(Long idJuego);
}

