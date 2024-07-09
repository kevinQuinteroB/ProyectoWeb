package count.proyecto.web.demo_cliente.Services;

import count.proyecto.web.demo_cliente.Models.Genero;
import count.proyecto.web.demo_cliente.Repository.GeneroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GeneroService {
    @Autowired
    private GeneroRepository generoRepository;

    public List<Genero> generos(){
        return generoRepository.findAll();
    }

}
