// 🔐 CONFIGURACIÓN
const SUPABASE_URL = "https://waicbhhrvlilqjmqjxgf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhaWNiaGhydmxpbHFqbXFqeGdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyNzkyOTMsImV4cCI6MjA4Nzg1NTI5M30.DUxylkFmnxXICRZUDMF8v3VzP7Sib-JGKVypkjjC5eU";

// Inicializar cliente
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Seleccionar formulario
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const empresa = document.getElementById("empresa").value;
    const email = document.getElementById("email").value;
    const tipoEvento = document.getElementById("tipoEvento").value;
    const mensaje = document.getElementById("mensaje").value;

    // Insertar en Supabase
    const { data, error } = await supabaseClient
        .from("presupuestos")
        .insert([
            {
                nombre,
                empresa,
                email,
                tipo_evento: tipoEvento,
                mensaje
            }
        ]);

    if (error) {
        alert("❌ Error al enviar");
        console.error(error);
    } else {
        alert("✅ Solicitud enviada correctamente");
        form.reset();
    }
});