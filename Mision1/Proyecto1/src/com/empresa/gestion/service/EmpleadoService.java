package com.empresa.gestion.service;
import com.empresa.gestion.model.Empleado;
import java.util.ArrayList;


public class EmpleadoService {
    private ArrayList<Empleado> empleados= new ArrayList<>();
    
    public void agregarEmpleado(Empleado empleado) {
        empleados.add(empleado);
        System.out.println("Empleado agregado");
    }
    
    

}
