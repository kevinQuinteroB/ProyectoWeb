package count.proyecto.web.demo_cliente.Services;

import count.proyecto.web.demo_cliente.Models.Comentario;
import count.proyecto.web.demo_cliente.Repository.ComentarioRepository;
import count.proyecto.web.demo_cliente.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ComentarioService {
    @Autowired
    private ComentarioRepository comentarioRepository;

    public Comentario findComentarioByid_juego(Long id_juego) {
        return comentarioRepository.findByid_juego(id_juego);
    }

    public Comentario saveComentario(Comentario comentario){
        return comentarioRepository.save(comentario);
    }
}
