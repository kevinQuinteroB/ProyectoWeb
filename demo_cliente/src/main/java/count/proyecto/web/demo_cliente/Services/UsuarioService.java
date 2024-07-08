package count.proyecto.web.demo_cliente.Services;

import count.proyecto.web.demo_cliente.Models.Comentario;
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

    public void updateSaldo (Long idUsuario, Usuario usuarioActualizado) {
        Usuario usuarioExistente = usuarioRepository.findById(idUsuario)
                .orElseThrow(() -> new IllegalArgumentException("Comentario no encontrado con ID: " + idUsuario.toString()));

        usuarioExistente.setSaldo(usuarioActualizado.getSaldo());

        usuarioRepository.actualizarSaldo(idUsuario, usuarioActualizado.getSaldo());
    }
}
