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
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
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
    private List<JuegoGenero> JuegoGeneros = new ArrayList<>();

    public void addJuegoGenero(JuegoGenero juegoGenero) {
        JuegoGeneros.add(juegoGenero);
        juegoGenero.setGenero(this);
    }

    public void removeJuegoGenero(JuegoGenero juegoGenero) {
        JuegoGeneros.remove(juegoGenero);
        juegoGenero.setGenero(null);
    }
}
