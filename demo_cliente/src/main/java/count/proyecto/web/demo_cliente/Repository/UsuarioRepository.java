package count.proyecto.web.demo_cliente.Repository;

import count.proyecto.web.demo_cliente.Models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    @Query(value = "SELECT * FROM usuario WHERE email = :email AND contrasena = :contrasena", nativeQuery = true)
    Usuario findByEmail(String email, String contrasena);

    @Query(value = "SELECT * FROM usuario WHERE idUsuario = :idUsuario", nativeQuery = true)
    Boolean findByIdUsuario(Long idUsuario);
}
