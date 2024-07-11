package count.proyecto.web.demo_cliente.Services;

import count.proyecto.web.demo_cliente.Models.Valoracion;
import count.proyecto.web.demo_cliente.Repository.ValoracionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ValoracionService {
    @Autowired
    private ValoracionRepository valoracionRepository;


    public List<Valoracion> findValoracionByid_juego(Long id_juego) {
        return valoracionRepository.findByid_juego(id_juego);
    }
}
