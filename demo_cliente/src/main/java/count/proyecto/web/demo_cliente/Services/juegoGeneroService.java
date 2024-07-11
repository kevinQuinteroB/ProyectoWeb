package count.proyecto.web.demo_cliente.Services;

import count.proyecto.web.demo_cliente.Models.JuegoGenero;
import count.proyecto.web.demo_cliente.Repository.GeneroRepository;
import count.proyecto.web.demo_cliente.Repository.juegoGeneroRepository;
import count.proyecto.web.demo_cliente.Repository.JuegoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class juegoGeneroService {
    @Autowired
    private juegoGeneroRepository juegogeneroRepository;


    public List<JuegoGenero> findjuegoGeneroByid_juego(Long idJuego) {
        return juegogeneroRepository.findByid_juego(idJuego);
    }
    public List<JuegoGenero> findByGender(Long idGender) {
        return juegogeneroRepository.findByGender(idGender);
    }
}