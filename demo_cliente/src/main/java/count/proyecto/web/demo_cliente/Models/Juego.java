package count.proyecto.web.demo_cliente.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.ArrayList;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
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


    @JsonIgnore
    @OneToMany(mappedBy = "juego",cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comentario> comentarios = new ArrayList<>();

    public void addComentario(Comentario comentario) {
        comentarios.add(comentario);
        comentario.setJuego(this);
    }
    public void removeComentario(Comentario comentario) {
        comentarios.remove(comentario);
        comentario.setJuego(null);
    }


    @JsonIgnore
    @OneToMany(mappedBy = "juego", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<JuegoGenero> JuegoGeneros = new ArrayList<>();

    public void addJuegoGenero(JuegoGenero juegoGenero) {
        JuegoGeneros.add(juegoGenero);
        juegoGenero.setJuego(this);
    }

    public void removeJuegoGenero(JuegoGenero juegoGenero) {
        JuegoGeneros.remove(juegoGenero);
        juegoGenero.setJuego(null);
    }


    @JsonIgnore
    @OneToMany(mappedBy = "juego", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Valoracion> valoraciones = new ArrayList<>();

    public void addValoracion(Valoracion valoracion) {
        valoraciones.add(valoracion);
        valoracion.setJuego(this);
    }

    public void removeValoracion(Valoracion valoracion) {
        valoraciones.remove(valoracion);
        valoracion.setJuego(null);
    }

}
