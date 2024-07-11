package count.proyecto.web.demo_cliente.Repository;

import count.proyecto.web.demo_cliente.Models.Compra;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface CompraRepository extends JpaRepository<Compra,Long> {
    @Query(value = "SELECT * from Compra where id_usuario=:id_Usuario and total_compra=0",nativeQuery = true)
    List<Compra> findByid_usuario(Long id_Usuario);

    @Query(value = "SELECT * from Compra where id_usuario=:id_Usuario and total_compra != 0",nativeQuery = true)
    List<Compra> carritoUsuario(Long id_Usuario);

    @Modifying
    @Transactional
    @Query("UPDATE Compra u SET u.fecha = :fecha,u.totalCompra=:totalCompra WHERE u.idCompra = :idCompra")
    void actualizarVenta(@Param("idCompra") Long idCompra, @Param("totalCompra") double totalCompra, @Param("fecha") Date fecha);
}
