package count.proyecto.web.demo_cliente.Services;

import count.proyecto.web.demo_cliente.Models.Valoracion;
import count.proyecto.web.demo_cliente.Models.Juego;
import count.proyecto.web.demo_cliente.Repository.ValoracionRepository;
import count.proyecto.web.demo_cliente.Repository.JuegoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ValoracionService {
    @Autowired
    private ValoracionRepository valoracionRepository;

    @Autowired
    private JuegoRepository juegoRepository;

    public List<Valoracion> findValoracionByid_juego(Long id_juego) {
        return valoracionRepository.findByid_juego(id_juego);
    }

    public Valoracion save(Long idJuego, Valoracion valoracion) {
        Juego juego = juegoRepository.findById(idJuego)
                .orElseThrow(() -> new IllegalArgumentException("Juego no encontrado con ID: " + idJuego));

        valoracion.setJuego(juego);

        return valoracionRepository.save(valoracion);
    }

}
