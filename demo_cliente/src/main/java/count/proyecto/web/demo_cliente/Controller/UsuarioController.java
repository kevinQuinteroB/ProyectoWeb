package count.proyecto.web.demo_cliente.Controller;

import count.proyecto.web.demo_cliente.Models.Usuario;
import count.proyecto.web.demo_cliente.Services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/login/{email}/{contrasena}")
    public ResponseEntity<Usuario> retunUsuario(@PathVariable String email, @PathVariable String contrasena) {
        return ResponseEntity.ok(usuarioService.findUsuarioByEmail(email, contrasena));
    }
}
