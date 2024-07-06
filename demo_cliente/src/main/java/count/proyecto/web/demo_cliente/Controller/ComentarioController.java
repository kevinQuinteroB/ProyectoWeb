package count.proyecto.web.demo_cliente.Controller;

import count.proyecto.web.demo_cliente.Models.Comentario;
import count.proyecto.web.demo_cliente.Services.ComentarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;

@Controller
public class ComentarioController {
    @Autowired
    private ComentarioService comentarioService;

    @GetMapping("/juego/{juegoId}/comentarios")
    public ResponseEntity<List<Comentario>> retunComentariosPorJuego(@PathVariable Long juegoId) {
        List<Comentario> comentarios = comentarioService.findByJuegoId(juegoId);
        return ResponseEntity.ok(comentarios);
    }

    @PostMapping("/juego/comentario")
    public ResponseEntity<Comentario> registrarComentario(@RequestBody Comentario comentario) {
        Comentario newComentario = comentarioService.saveComentario(comentario);
        return ResponseEntity.ok(newComentario);
    }
}

