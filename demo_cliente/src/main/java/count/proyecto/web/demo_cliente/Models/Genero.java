package count.proyecto.web.demo_cliente.Models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "genero")
public class Genero {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name = "idGenero")
    private long idGenero;

    @Column(name = "genero")
    private String genero;

    @Column(name = "descripcion")
    private String descripcion;

}
