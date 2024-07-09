package count.proyecto.web.demo_cliente.Controller;

import count.proyecto.web.demo_cliente.Models.juegoGenero;
import count.proyecto.web.demo_cliente.Services.juegoGeneroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/juegoGenero")
public class juegoGeneroController {
    @Autowired
    private juegoGeneroService juegogeneroService;

    @GetMapping("/listaGenero/{id_juego}")
    public ResponseEntity<List<juegoGenero>> returnjuegoGenero(@PathVariable Long id_juego) {
        List<juegoGenero> juegogeneros = juegogeneroService.findjuegoGeneroByid_juego(id_juego);
        return ResponseEntity.ok(juegogeneros);
    }
}

