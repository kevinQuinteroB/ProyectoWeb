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
@Table(name = "Genero")
public class Genero {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idGenero")
    private long idGenero;

    @Column(name = "genero")
    private String genero;

    @Column(name = "descripcion")
    private String descripcion;

    @JsonIgnore
    @OneToMany(mappedBy = "genero", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<juegoGenero> juegoGeneros = new ArrayList<>();

    public void addJuegoGenero(juegoGenero juegoGenero) {
        juegoGeneros.add(juegoGenero);
        juegoGenero.setGenero(this);
    }

    public void removeJuegoGenero(juegoGenero juegoGenero) {
        juegoGeneros.remove(juegoGenero);
        juegoGenero.setGenero(null);
    }
}
