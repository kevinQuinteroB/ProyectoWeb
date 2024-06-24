package count.proyecto.web.demo_cliente.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "juegoGenero")
public class juegoGenero {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idjuegoGenero")
    private long idjuegoGenero;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="idGenero", nullable = false)
    private Genero genero;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="idJuego", nullable = false)
    private Juego juego;
}