package com.Ecom.Order.orderline;

import com.Ecom.Order.order.Order;
import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
public class OrderLine {

    @Id
    @GeneratedValue
    private Integer id;

    @ManyToOne
    @JoinColumn(name="order_id")
    private Order order;

    private Integer productId;
    private double quantity;

}
