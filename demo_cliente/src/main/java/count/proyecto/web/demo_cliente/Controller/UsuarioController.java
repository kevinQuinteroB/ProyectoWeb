package count.proyecto.web.demo_cliente.Controller;

import count.proyecto.web.demo_cliente.Models.Usuario;
import count.proyecto.web.demo_cliente.Services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/login/{email}/{contrasena}")
    public ResponseEntity<Usuario> retunUsuario(@PathVariable String email, @PathVariable String contrasena) {
        return ResponseEntity.ok(usuarioService.findUsuarioByEmail(email, contrasena));
    }

    @PostMapping("/login")
    public ResponseEntity<Usuario>registrarUsuario(@RequestBody Usuario usuario){
        Usuario newUsuario = usuarioService.saveUsuario(usuario);
        return ResponseEntity.ok(newUsuario);
    }

    @DeleteMapping("login/{id}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable Long id){
        if (usuarioService.findByIdUsuario(id)){git ad
            usuarioService.deleteById(id);
            return ResponseEntity.noContent().build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    }
