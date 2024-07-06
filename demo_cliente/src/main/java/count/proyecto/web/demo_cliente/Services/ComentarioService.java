package count.proyecto.web.demo_cliente.Services;

import count.proyecto.web.demo_cliente.Models.Comentario;
import count.proyecto.web.demo_cliente.Repository.ComentarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComentarioService {
    @Autowired
    private ComentarioRepository comentarioRepository;

    public List<Comentario> findByJuegoId(Long juegoId) {
        return comentarioRepository.findByJuegoId(juegoId);
    }

    public Comentario saveComentario(Comentario comentario) {
        return comentarioRepository.save(comentario);
    }
}

