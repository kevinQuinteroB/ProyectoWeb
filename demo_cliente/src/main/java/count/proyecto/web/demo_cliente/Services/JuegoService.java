package count.proyecto.web.demo_cliente.Services;

import count.proyecto.web.demo_cliente.Models.Juego;
import count.proyecto.web.demo_cliente.Repository.JuegoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JuegoService {
    @Autowired
    private JuegoRepository juegoRepository;

    public List<Juego> getJuegos() {
        return juegoRepository.findAll();
    }
}
