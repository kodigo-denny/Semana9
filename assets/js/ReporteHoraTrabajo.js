class ReporteHoraTrabajo{

    static reporteSalarioHorasTrabajadas(empleado){
        if(empleado.horasTrabajo.getHoras()>40)
            return empleado.horasTrabajo.getHoras() * empleado.cargo.salarioHora.getSalarioHora() + 100;
        else
            return empleado.horasTrabajo.getHoras() * empleado.cargo.salarioHora.getSalarioHora();
    }
}