package count.proyecto.web.demo_cliente.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "juego_genero")
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
