package count.proyecto.web.demo_cliente.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "ListaJuego")
public class ListaJuego {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idListaJuego")
    private long idListaJuego;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="idUsuario", nullable = false)
    private Usuario usuario;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="idJuego", nullable = false)
    private Juego juego;
}
