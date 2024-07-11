package count.proyecto.web.demo_cliente.Controller;

import count.proyecto.web.demo_cliente.Models.Juego;
import count.proyecto.web.demo_cliente.Services.JuegoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/game")
public class JuegoController {
    @Autowired
    private JuegoService juegoService;

    @GetMapping("/all")
    public ResponseEntity<List<Juego>> traerTodo(){
         List<Juego> lista=juegoService.getJuegos();
         return ResponseEntity.ok(lista);
    }
    @GetMapping("/{idJuego}")
    public ResponseEntity<Juego> buscarPorId(@PathVariable Long idJuego){
        Juego game=juegoService.getJuego(idJuego);
        return ResponseEntity.ok(game);
    }
}
