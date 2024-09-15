package com.Ecom.Order.order;

import com.Ecom.Order.customer.Address;
import com.Ecom.Order.customer.CustomerClient;
import com.Ecom.Order.customer.CustomerRequest;
import com.Ecom.Order.customer.CustomerResponse;
import com.Ecom.Order.kafka.OrderConfirmation;
import com.Ecom.Order.kafka.OrderProducer;
import com.Ecom.Order.orderline.OrderLineRequest;
import com.Ecom.Order.orderline.OrderLineService;
import com.Ecom.Order.product.ProductClientFeing;
import com.Ecom.Order.product.PurchaseRequest;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderMapper mapper;
    private final OrderRepository repo;
    private final CustomerClient customerClient;
    private final ProductClientFeing productClientFeing;
    private final OrderLineService orderLineService;
    private final OrderProducer orderProducer;

    public String createOrder(OrderRequest request) {

        var Address = new Address(request.street(), request.houseNumber(), request.zipCode());

        var CustomerRequest = new CustomerRequest(
                request.userid(),
                request.firstName(),
                request.lastName(),
                request.email(),
                Address
        );

        customerClient.createCustomer(CustomerRequest);

        var purchasedProduct = this.productClientFeing.purchaseProducts(request.products());

        var order = this.repo.save(mapper.toOrder(request));


        for(PurchaseRequest purchaseRequest: request.products()){
            orderLineService.saveOrderLine(
                    new OrderLineRequest(
                            null,
                            order.getId(),
                            purchaseRequest.productId(),
                            purchaseRequest.quantity()
                    ));

        }

        CustomerResponse currentCustomer = new CustomerResponse(
                request.userid(),
                request.firstName(),
                request.lastName(),
                request.email());

        orderProducer.sendOrderConfirmation(
                new OrderConfirmation(
                        request.reference(),
                        request.amount(),
                        request.paymentMethod(),
                        currentCustomer,
                        purchasedProduct
                )
        );

        return "Successfully Created Order";
    }

    public List<OrderResponse> findAll() {
        return repo.findAll().stream().map(mapper::fromOrder)
                .collect(Collectors.toList());
    }

    public OrderResponse findById(Integer orderId) {
        return repo.findById(orderId).map(mapper::fromOrder).orElseThrow(()->new EntityNotFoundException(String.format("Order not found")));
    }
}
