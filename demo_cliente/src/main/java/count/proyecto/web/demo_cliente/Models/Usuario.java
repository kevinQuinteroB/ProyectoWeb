package count.proyecto.web.demo_cliente.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "usuario")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idUsuario")
    private long idUsuario;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "edad")
    private long edad;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "contrasena")
    private String contrasena;

    @Column(name = "saldo")
    private long saldo;

    @Column(name = "sexo")
    private String sexo;

    @Column(name = "telefono")
    private long telefono;


    @JsonIgnore
    @OneToMany(mappedBy = "usuario",cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comentario> comentarios = new ArrayList<>();

    public void addComentario(Comentario comentario) {
        comentarios.add(comentario);
        comentario.setUsuario(this);
    }
    public void removeComentario(Comentario comentario) {
        comentarios.remove(comentario);
        comentario.setUsuario(null);
    }
}
