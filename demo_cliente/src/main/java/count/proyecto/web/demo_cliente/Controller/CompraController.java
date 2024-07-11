package count.proyecto.web.demo_cliente.Controller;

import count.proyecto.web.demo_cliente.Models.Compra;
import count.proyecto.web.demo_cliente.Services.CompraService;
import jakarta.transaction.Transactional;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
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
    @DeleteMapping("/del/{idCompra}")
    public ResponseEntity<Compra> removeItem(@PathVariable Long idCompra){
        compraService.delete(idCompra);
        return ResponseEntity.ok().build();
    }
    @PutMapping("/update/{fecha}/{total}")
    @Transactional
    public ResponseEntity updateCompra(@PathVariable Date fecha,
                                       @PathVariable double total,
                                       @RequestBody Compra compra){
        compraService.updateCompra(compra,fecha, total);
        return ResponseEntity.ok().build();
    }
}
