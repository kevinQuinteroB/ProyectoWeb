package count.proyecto.web.demo_cliente.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "Juego")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Juego {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idJuego")
    private long idJuego;

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

    @OneToMany(mappedBy = "Juego",cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comentario> comentarios = new ArrayList<>();

    public void addComentario(Comentario comentario) {
        comentarios.add(comentario);
        comentario.setJuego(this);
    }
    public void removeComentario(Comentario comentario) {
        comentarios.remove(comentario);
        comentario.setJuego(null);
    }
}
