package count.proyecto.web.demo_cliente.Services;

import count.proyecto.web.demo_cliente.Models.juegoGenero;
import count.proyecto.web.demo_cliente.Models.Juego;
import count.proyecto.web.demo_cliente.Models.Genero;
import count.proyecto.web.demo_cliente.Repository.GeneroRepository;
import count.proyecto.web.demo_cliente.Repository.juegoGeneroRepository;
import count.proyecto.web.demo_cliente.Repository.JuegoRepository;
import count.proyecto.web.demo_cliente.Repository.GeneroRepository;
import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class juegoGeneroService {
    @Autowired
    private juegoGeneroRepository juegogeneroRepository;
    @Autowired
    private GeneroRepository generoRepository;
    @Autowired
    private JuegoRepository juegoRepository;

    public List<juegoGenero> findjuegoGeneroByid_juego(Long id_juego) {
        return juegogeneroRepository.findByid_juego(id_juego);
    }
}