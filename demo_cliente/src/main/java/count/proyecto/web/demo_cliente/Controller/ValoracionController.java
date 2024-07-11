package count.proyecto.web.demo_cliente.Controller;

import count.proyecto.web.demo_cliente.Models.Valoracion;
import count.proyecto.web.demo_cliente.Services.ValoracionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/valoracion")
public class ValoracionController {
    @Autowired
    private ValoracionService valoracionService;

    @GetMapping("/{id_juego}")
    public ResponseEntity<List<Valoracion>> returnValoracion(@PathVariable Long id_juego) {
        List<Valoracion> valoracions = valoracionService.findValoracionByid_juego(id_juego);
        return ResponseEntity.ok(valoracions);
    }

    @PostMapping("/crear/{idJuego}")
    public ResponseEntity<Valoracion> crearValoracion(
            @PathVariable Long idJuego,
            @RequestBody Valoracion valoracion
    ) {
        Valoracion nuevoValoracion = valoracionService.save(idJuego, valoracion);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoValoracion);
    }

}

