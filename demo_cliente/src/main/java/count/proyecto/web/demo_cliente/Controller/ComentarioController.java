package count.proyecto.web.demo_cliente.Controller;

import count.proyecto.web.demo_cliente.Models.Comentario;
import count.proyecto.web.demo_cliente.Services.ComentarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/comentario")
public class ComentarioController {
    @Autowired
    private ComentarioService comentarioService;

    @GetMapping("/juego/{id_juego}")
    public ResponseEntity<List<Comentario>> returnComentario(@PathVariable Long id_juego) {
        List<Comentario> comentarios = comentarioService.findComentarioByid_juego(id_juego);
        return ResponseEntity.ok(comentarios);
    }

    @PostMapping("/crear/{idUsuario}/{idJuego}")
    public ResponseEntity<Comentario> crearComentario(
            @PathVariable Long idUsuario,
            @PathVariable Long idJuego,
            @RequestBody Comentario comentario
    ) {
        Comentario nuevoComentario = comentarioService.save(idUsuario, idJuego, comentario);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoComentario);
    }

    @DeleteMapping("/eliminar/{idComentario}")
    public ResponseEntity<Void> eliminarComentario(@PathVariable Long idComentario) {
        comentarioService.deleteById(idComentario);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/actualizar/{id}")
    public ResponseEntity<Comentario> actualizarComentario(
            @PathVariable Long id,
            @RequestBody Comentario comentario
    ) {
        Comentario comentarioActualizado = comentarioService.updateComentario(id, comentario);
        return ResponseEntity.ok(comentarioActualizado);
    }
}

