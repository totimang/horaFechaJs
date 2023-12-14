const time = document.getElementById('time');
const date = document.getElementById('date');

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" //constante de los meses
];

const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" //constante de los días.
];

const interval = setInterval(() => {

    const local = new Date();
    
    let week = local.getDay(),      //para ver el nombre del día de la semana.
        day = local.getDate(),      //para ver el N° de día de la semana.
        month = local.getMonth(),   //para ver el mes.
        year = local.getFullYear(); //para ver el año.

    time.innerHTML = local.toLocaleTimeString();                                //mostrando la hora en la pantalla.
    date.innerHTML = `${dayNames[week]} ${day} ${monthNames[month]} ${year}`;   //mostrando la fecha en la pantalla.

}, 1000);