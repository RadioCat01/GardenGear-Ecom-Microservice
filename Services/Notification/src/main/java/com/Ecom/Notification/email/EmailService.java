package com.Ecom.Notification.email;

import com.Ecom.Notification.kafka.order.Product;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService {

    private final JavaMailSender mailSender;
    private final SpringTemplateEngine templateEngine;

    @Async
    public void sendPaymentSuccessEmail(
            String destinationEmail,
            String customerName,
            BigDecimal amount,
            String orderReference
    ) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());

        messageHelper.setFrom("Pwnkanishka@gmail.com");

        final String templateName = EmailTemplates.PAYMENT_CONFIRMATION.getTemplate();

        Map<String,Object> vatiables = new HashMap<>();
        vatiables.put("customerName", customerName);
        vatiables.put("amount", amount);
        vatiables.put("orderReference", orderReference);

        Context context =new Context();
        context.setVariables(vatiables);
        messageHelper.setSubject(EmailTemplates.PAYMENT_CONFIRMATION.getSubject());

        try{
            String htmlTemplate = templateEngine.process(templateName, context);
            messageHelper.setText(htmlTemplate, true);

            messageHelper.setTo(destinationEmail);
            mailSender.send(mimeMessage);

            log.info(String.format("Info - Email sent successful"));

        }catch (MessagingException exp){
            log.warn("Warning - cannot send email to destination");
        }
    }

    @Async
    public void sendOrderConfirmationEmail(
            String destinationEmail,
            String customerName,
            BigDecimal amount,
            String orderReference,
            List<Product> products
    ) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());

        messageHelper.setFrom("Pwnkanishka@gmail.com");

        final String templateName = EmailTemplates.ORDER_CONFIRMATION.getTemplate();


        Map<String,Object> vatiables = new HashMap<>();
        vatiables.put("customerName", customerName);
        vatiables.put("totalAmount", amount);
        vatiables.put("orderReference", orderReference);
        vatiables.put("products", products);

        Context context =new Context();
        context.setVariables(vatiables);
        messageHelper.setSubject(EmailTemplates.ORDER_CONFIRMATION.getSubject());

        try{
            String htmlTemplate = templateEngine.process(templateName, context);
            messageHelper.setText(htmlTemplate, true);

            messageHelper.setTo(destinationEmail);
            mailSender.send(mimeMessage);

            log.info(String.format("Info - Email sent successful"));

        }catch (MessagingException exp){
            log.warn("Warning - cannot send email to destination");
        }

    }

}

























