package count.proyecto.web.demo_cliente.Models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "Juego")
public class Juego {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "valoracion")
    private long valoracion;

    @Column(name = "precio")
    private long precio;

    @Column(name = "imagen")
    private String imagen;

    @Column(name = "descuento")
    private long descuento;
}
