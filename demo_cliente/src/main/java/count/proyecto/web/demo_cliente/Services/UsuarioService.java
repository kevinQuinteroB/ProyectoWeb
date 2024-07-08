package count.proyecto.web.demo_cliente.Services;

import count.proyecto.web.demo_cliente.Models.Usuario;
import count.proyecto.web.demo_cliente.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario findUsuarioByEmail(String email, String contrasena) {
        return usuarioRepository.findByEmail(email, contrasena);
    }

    public Usuario saveUsuario(Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    public Usuario findByIdUsuario(Long idUsuario){
        return  usuarioRepository.findByIdUsuario(idUsuario);
    }

    public void deleteById(Long idUsuario){
        usuarioRepository.deleteById(idUsuario);
    }
}
