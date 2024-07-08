package count.proyecto.web.demo_cliente.Repository;

import count.proyecto.web.demo_cliente.Models.Usuario;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    @Query(value = "SELECT * FROM usuario WHERE email = :email AND contrasena = :contrasena", nativeQuery = true)
    Usuario findByEmail(String email, String contrasena);

    @Query(value = "SELECT * FROM usuario WHERE id_usuario = :idUsuario", nativeQuery = true)
    Usuario findByIdUsuario(Long idUsuario);

    @Modifying
    @Transactional
    @Query("UPDATE Usuario u SET u.saldo = :saldo WHERE u.idUsuario = :idUsuario")
    void actualizarSaldo(@Param("idUsuario") Long idUsuario, @Param("saldo") Long saldo);
}
