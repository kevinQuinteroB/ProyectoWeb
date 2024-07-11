package count.proyecto.web.demo_cliente.Controller;

import count.proyecto.web.demo_cliente.Models.Compra;
import count.proyecto.web.demo_cliente.Services.CompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/buy")
public class CompraController {
    @Autowired
    private CompraService compraService;

    @GetMapping("/{id_usuario}")
    public ResponseEntity<List<Compra>> getListItems(@PathVariable Long id_usuario){
        List<Compra> items =compraService.findByid_usuario(id_usuario);
        return ResponseEntity.ok(items);
    }

    @GetMapping("/inventario/{id_usuario}")
    public ResponseEntity<List<Compra>> getInventario(@PathVariable Long id_usuario){
        List<Compra> compras = compraService.carritoUsuario(id_usuario);
        return  ResponseEntity.ok(compras);
    }
    @PostMapping("/add/{idUsuario}/{idJuego}")
    public ResponseEntity<Compra> setItem(@PathVariable Long idUsuario, @PathVariable Long idJuego, @RequestBody Compra compra){
        Compra compraIndividual =compraService.guardarItemCarrito(idUsuario,idJuego,compra);
        return ResponseEntity.status(HttpStatus.CREATED).body(compraIndividual);
    }
}
