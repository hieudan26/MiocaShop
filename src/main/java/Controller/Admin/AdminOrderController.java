package Controller.Admin;

import Model.ProductsEntity;
import Utils.SingletonServiceUltils;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/admin/order")
public class AdminOrderController extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher dispatcher = req.getRequestDispatcher("/Admin/Order.jsp");
        dispatcher.forward(req,resp);
        System.out.println("heloo"+req.getSession().getAttribute("loginedUser"));
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id =   req.getParameter("Id");
        if(id != null){
            int idproduct = Integer.parseInt(id);
            ProductsEntity productsEntity = SingletonServiceUltils.getProductDAOImpl().getProductbyID(idproduct);
            if(productsEntity != null)
            {
                Boolean status = productsEntity.getPublish();
                productsEntity.setPublish(!status);
                SingletonServiceUltils.getProductDAOImpl().update(productsEntity);
            }
        }

        return;
    }
}
