package count.proyecto.web.demo_cliente.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cascade;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "Comentario")
public class Comentario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idComentario")
    private long idComentario;

    @Column(name = "contenido")
    private String contenido;

    @Column(name = "valoracionJuego")
    private double valoracionJuego;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idUsuario", nullable = false)
    private Usuario usuario;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idJuego", nullable = false)
    private Juego juego;
}