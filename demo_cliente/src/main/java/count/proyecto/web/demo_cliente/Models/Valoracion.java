package count.proyecto.web.demo_cliente.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "Valoracion")
public class Valoracion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idValoracion")
    private long idValoracion;

    @Column(name = "content")
    private long content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="idJuego", nullable = false)
    private Juego juego;
}
