package count.proyecto.web.demo_cliente.Controller;

import count.proyecto.web.demo_cliente.Models.Comentario;
import count.proyecto.web.demo_cliente.Services.ComentarioService;
import count.proyecto.web.demo_cliente.Services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class ComentarioController {
    @Autowired
    private ComentarioService comentarioService;

    @GetMapping("/login/{id_juego}")
    public ResponseEntity<Comentario> retunComentario(@PathVariable Long id_juego) {
        return ResponseEntity.ok(comentarioService.findComentarioByid_juego(id_juego));
    }

    @PostMapping("/login")
    public ResponseEntity<Comentario>registrarComentario(@RequestBody Comentario comentario){
        Comentario newComentario = comentarioService.saveComentario(comentario);
        return ResponseEntity.ok(newComentario);
    }
}
