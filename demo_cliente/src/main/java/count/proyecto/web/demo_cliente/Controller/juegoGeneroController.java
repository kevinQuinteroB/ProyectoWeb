package count.proyecto.web.demo_cliente.Controller;

import count.proyecto.web.demo_cliente.Models.JuegoGenero;
import count.proyecto.web.demo_cliente.Services.juegoGeneroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/juegoGenero")
public class juegoGeneroController {
    @Autowired
    private juegoGeneroService juegogeneroService;

    @GetMapping("/get/{idJuego}")
    public ResponseEntity<List<JuegoGenero>> returnjuegoGenero(@PathVariable Long idJuego) {
        List<JuegoGenero> juegogeneros = juegogeneroService.findjuegoGeneroByid_juego(idJuego);
        return ResponseEntity.ok(juegogeneros);
    }
}

