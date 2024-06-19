package count.proyecto.web.demo_cliente.Models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "usuarios")
public class Usuarios {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @Column(name = "username")
    private String username;

    @Column(name = "edad")
    private long edad;

    @Column(name = "email")
    private String email;

    @Column(name = "contrasena")
    private String contrasena;

    @Column(name = "saldo")
    private long saldo;
}
