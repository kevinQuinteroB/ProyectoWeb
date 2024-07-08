package count.proyecto.web.demo_cliente.Services;

import count.proyecto.web.demo_cliente.Models.Comentario;
import count.proyecto.web.demo_cliente.Models.Juego;
import count.proyecto.web.demo_cliente.Models.Usuario;
import count.proyecto.web.demo_cliente.Repository.ComentarioRepository;
import count.proyecto.web.demo_cliente.Repository.JuegoRepository;
import count.proyecto.web.demo_cliente.Repository.UsuarioRepository;
import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComentarioService {
    @Autowired
    private ComentarioRepository comentarioRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private JuegoRepository juegoRepository;

    public List<Comentario> findComentarioByid_juego(Long id_juego) {
        return comentarioRepository.findByid_juego(id_juego);
    }

    public Comentario save(Long idUsuario, Long idJuego, Comentario comentario) {
        Usuario usuario = usuarioRepository.findById(idUsuario)
                .orElseThrow(() -> new IllegalArgumentException("Usuario no encontrado con ID: " + idUsuario));

        Juego juego = juegoRepository.findById(idJuego)
                .orElseThrow(() -> new IllegalArgumentException("Juego no encontrado con ID: " + idJuego));

        comentario.setUsuario(usuario);
        comentario.setJuego(juego);

        return comentarioRepository.save(comentario);
    }

    public void deleteById(Long idComentario) {
        comentarioRepository.deleteById(idComentario);
    }
}
