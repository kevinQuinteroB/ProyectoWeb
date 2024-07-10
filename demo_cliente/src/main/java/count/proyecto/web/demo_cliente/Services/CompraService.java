package count.proyecto.web.demo_cliente.Services;

import count.proyecto.web.demo_cliente.Models.Compra;
import count.proyecto.web.demo_cliente.Repository.CompraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompraService {
    @Autowired
    private CompraRepository compraRepository;

    public List<Compra> findByid_usuario(Long idUsuario){
        return compraRepository.findByid_usuario(idUsuario);
    }

    public List<Compra> carritoUsuario(Long idUsuario){
        return compraRepository.carritoUsuario(idUsuario);
    }
}
