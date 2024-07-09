package count.proyecto.web.demo_cliente.Controller;

import count.proyecto.web.demo_cliente.Models.Genero;
import count.proyecto.web.demo_cliente.Services.GeneroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/gender")
public class GeneroController {
    @Autowired
    private GeneroService generoService;

    @GetMapping("/all")
    public ResponseEntity<List<Genero>> getGender(){
        List<Genero> generos =generoService.generos();
        return ResponseEntity.ok(generos);
    }
}
