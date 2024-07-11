package count.proyecto.web.demo_cliente.Services;

import count.proyecto.web.demo_cliente.Models.Comentario;
import count.proyecto.web.demo_cliente.Models.Compra;
import count.proyecto.web.demo_cliente.Models.Juego;
import count.proyecto.web.demo_cliente.Models.Usuario;
import count.proyecto.web.demo_cliente.Repository.CompraRepository;
import count.proyecto.web.demo_cliente.Repository.JuegoRepository;
import count.proyecto.web.demo_cliente.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CompraService {
    @Autowired
    private CompraRepository compraRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private JuegoRepository juegoRepository;

    public List<Compra> findByid_usuario(Long idUsuario){
        return compraRepository.findByid_usuario(idUsuario);
    }

    public List<Compra> carritoUsuario(Long idUsuario){
        return compraRepository.carritoUsuario(idUsuario);
    }
    public Compra guardarItemCarrito(Long idUsuario, Long idJuego, Compra compra) {
        Usuario usuario = usuarioRepository.findById(idUsuario)
                .orElseThrow(() -> new IllegalArgumentException("Usuario no encontrado con ID: " + idUsuario));

        Juego juego = juegoRepository.findById(idJuego)
                .orElseThrow(() -> new IllegalArgumentException("Juego no encontrado con ID: " + idJuego));

        compra.setUsuario(usuario);
        compra.setJuego(juego);

        return compraRepository.save(compra);

    }
    public void delete (Long idCompra){
        compraRepository.deleteById(idCompra);
    }
    public void updateCompra(Compra compra, Date fecha, double total){
        Compra compraExistente = compraRepository.findById(compra.getIdCompra())
                .orElseThrow(() -> new IllegalArgumentException("Comentario no encontrado con ID: " + compra.getIdCompra()));

        compraExistente.setTotalCompra(compra.getTotalCompra());

        compraRepository.actualizarVenta(compraExistente.getIdCompra(),total,fecha);
    }
}
