import { type QuizQuestion } from "@/components/course/interactive-quiz";

export interface CourseModule {
	id: number;
	title: string;
	description: string;
	content: {
		theory: string[];
		tips?: string[];
		examples?: string[];
	};
	quiz: QuizQuestion[];
}

export const passwordCourseModules: CourseModule[] = [
	{
		id: 0,
		title: "¿Por qué son importantes las contraseñas seguras?",
		description:
			"Comprende la importancia de proteger tus cuentas con contraseñas robustas.",
		content: {
			theory: [
				"Las contraseñas son la primera línea de defensa para proteger tu información personal, académica y financiera en línea.",
				"Según MinTIC, el 60% de los estudiantes universitarios en Colombia han sido víctimas de fraude digital, y muchos casos comienzan con contraseñas débiles.",
				"Los ciberdelincuentes utilizan técnicas automatizadas que pueden probar millones de contraseñas en segundos, haciendo que las contraseñas simples sean extremadamente vulnerables.",
			],
			examples: [
				"🔴 Contraseña débil: '123456' - Puede ser crackeada en menos de 1 segundo",
				"🟡 Contraseña media: 'password2024' - Puede ser crackeada en minutos",
				"🟢 Contraseña fuerte: 'C4f3-M0nt4ñ4!2024' - Tomaría años o décadas crackearla",
			],
		},
		quiz: [
			{
				question:
					"¿Cuál es el principal problema de usar contraseñas simples como '123456'?",
				options: [
					"Son difíciles de recordar",
					"Pueden ser crackeadas en segundos con herramientas automatizadas",
					"No funcionan en todos los sitios web",
					"Ocupan mucho espacio en la memoria del navegador",
				],
				correctAnswer: 1,
				explanation:
					"Las contraseñas simples pueden ser crackeadas casi instantáneamente usando ataques de fuerza bruta o diccionarios de contraseñas comunes.",
			},
			{
				question:
					"Según MinTIC, ¿qué porcentaje de estudiantes universitarios colombianos ha sido víctima de fraude digital?",
				options: ["30%", "45%", "60%", "80%"],
				correctAnswer: 2,
				explanation:
					"MinTIC reporta que aproximadamente el 60% de los estudiantes universitarios han experimentado algún tipo de fraude digital, resaltando la importancia de la ciberhigiene.",
			},
		],
	},
	{
		id: 1,
		title: "Características de una contraseña segura",
		description:
			"Aprende los elementos esenciales para crear contraseñas robustas.",
		content: {
			theory: [
				"Una contraseña segura debe tener al menos 12 caracteres de longitud. Cada carácter adicional aumenta exponencialmente la dificultad de crackearla.",
				"Debe combinar diferentes tipos de caracteres: mayúsculas, minúsculas, números y símbolos especiales (!@#$%^&*).",
				"Evita usar información personal como nombres, fechas de nacimiento, nombres de mascotas o equipos favoritos, ya que esta información es fácil de obtener en redes sociales.",
			],
			tips: [
				"✅ Usa frases de contraseña: 'Mi-Cafe-Matutino!2024' es más segura y fácil de recordar que 'Mcm!24'",
				"✅ Sustituye letras por números similares: 'E' por '3', 'A' por '4', 'O' por '0'",
				"✅ Añade símbolos entre palabras: 'Azul@Cielo$Verde'",
				"❌ Nunca uses secuencias: '123456', 'abcdef', 'qwerty'",
				"❌ Evita palabras del diccionario sin modificar: 'password', 'admin', 'usuario'",
			],
		},
		quiz: [
			{
				question:
					"¿Cuál es la longitud mínima recomendada para una contraseña?",
				options: [
					"6 caracteres",
					"8 caracteres",
					"12 caracteres",
					"20 caracteres",
				],
				correctAnswer: 2,
				explanation:
					"Se recomienda un mínimo de 12 caracteres. Cada carácter adicional aumenta exponencialmente la seguridad de la contraseña.",
			},
			{
				question: "¿Cuál de estas contraseñas es la MÁS segura?",
				options: [
					"juanperez123",
					"Password2024!",
					"Gat0-N3gr0&Luna$2024",
					"12345678!@#$",
				],
				correctAnswer: 2,
				explanation:
					"La opción 'Gat0-N3gr0&Luna$2024' combina mayúsculas, minúsculas, números, símbolos y tiene más de 12 caracteres. Además, no usa información obvia.",
			},
			{
				question:
					"¿Por qué NO debes usar tu fecha de nacimiento en tu contraseña?",
				options: [
					"Porque los números hacen la contraseña menos segura",
					"Porque es información fácil de encontrar en redes sociales",
					"Porque los sitios web no permiten fechas",
					"Porque es ilegal usar fechas en contraseñas",
				],
				correctAnswer: 1,
				explanation:
					"La información personal como fechas de nacimiento es fácilmente obtenible de redes sociales y perfiles públicos, haciéndola predecible para atacantes.",
			},
		],
	},
	{
		id: 2,
		title: "Gestión segura de contraseñas",
		description:
			"Descubre herramientas y técnicas para administrar múltiples contraseñas de forma segura.",
		content: {
			theory: [
				"Es fundamental usar una contraseña diferente para cada cuenta. Si reutilizas contraseñas, un hackeo en un sitio compromete todas tus cuentas.",
				"Los gestores de contraseñas (password managers) son herramientas seguras que guardan y generan contraseñas complejas por ti, protegidas con una contraseña maestra.",
				"La autenticación de dos factores (2FA) añade una capa extra de seguridad requiriendo un segundo método de verificación además de tu contraseña.",
			],
			tips: [
				"🔐 Gestores recomendados: Bitwarden (gratuito y open source), 1Password, LastPass",
				"📱 Usa 2FA siempre que esté disponible: Google Authenticator, Microsoft Authenticator, Authy",
				"💾 Guarda tu contraseña maestra en un lugar físico seguro (no digital)",
				"🔄 Cambia contraseñas inmediatamente si sospechas de un hackeo",
				"❌ NUNCA guardes contraseñas en: notas del celular, correos, documentos sin cifrar",
			],
			examples: [
				"Ejemplo: Si usas 'MiPass123' en Gmail y Facebook, y Facebook sufre un hackeo, los atacantes probarán esa contraseña en Gmail automáticamente.",
				"Solución: Gmail: 'Caf3-M4ñ4n4!Gm' y Facebook: 'Azul$C1el0&Fb' - contraseñas completamente diferentes.",
			],
		},
		quiz: [
			{
				question: "¿Qué es un gestor de contraseñas (password manager)?",
				options: [
					"Un archivo de Excel donde guardas tus contraseñas",
					"Una herramienta que guarda y genera contraseñas seguras protegidas con una contraseña maestra",
					"Un servicio que hackea contraseñas débiles",
					"Una aplicación que elimina contraseñas antiguas",
				],
				correctAnswer: 1,
				explanation:
					"Los gestores de contraseñas son aplicaciones especializadas que almacenan todas tus contraseñas de forma cifrada, requiriendo solo que recuerdes una contraseña maestra.",
			},
			{
				question: "¿Qué significa 2FA o autenticación de dos factores?",
				options: [
					"Usar dos contraseñas diferentes",
					"Cambiar tu contraseña dos veces al año",
					"Requerir dos métodos de verificación para acceder a tu cuenta",
					"Tener dos cuentas en el mismo servicio",
				],
				correctAnswer: 2,
				explanation:
					"2FA requiere dos formas de verificación: algo que sabes (contraseña) y algo que tienes (código del celular), aumentando significativamente la seguridad.",
			},
			{
				question:
					"¿Por qué es peligroso usar la misma contraseña en múltiples sitios?",
				options: [
					"Porque es más difícil de recordar",
					"Porque si un sitio es hackeado, todas tus cuentas quedan comprometidas",
					"Porque los sitios web no lo permiten",
					"Porque hace que tu contraseña sea más débil",
				],
				correctAnswer: 1,
				explanation:
					"Si reutilizas contraseñas, un solo hackeo expone todas tus cuentas. Los atacantes prueban credenciales filtradas en múltiples servicios automáticamente.",
			},
		],
	},
	{
		id: 3,
		title: "Buenas prácticas y recuperación de cuentas",
		description:
			"Aprende a mantener tus cuentas seguras y qué hacer en caso de compromiso.",
		content: {
			theory: [
				"Actualiza tus contraseñas periódicamente, especialmente en cuentas críticas como email principal, banca en línea y plataformas académicas.",
				"Revisa regularmente la actividad de tus cuentas. Muchos servicios muestran desde dónde y cuándo se accedió a tu cuenta.",
				"Configura correctamente las opciones de recuperación de cuenta (email secundario, número de teléfono) antes de que las necesites.",
			],
			tips: [
				"🔍 Verifica si tus cuentas han sido comprometidas en: haveibeenpwned.com",
				"📧 Usa un email secundario solo para recuperación de cuentas (no lo uses para registros)",
				"🔔 Activa notificaciones de inicio de sesión en cuentas importantes",
				"⚠️ Si sospechas de hackeo: cambia contraseña inmediatamente, revisa actividad reciente, activa 2FA",
				"🇨🇴 Reporta fraudes a ColCERT (cert.co) o MinTIC",
			],
			examples: [
				"Revisar actividad en Gmail: Gmail → Cuenta de Google → Seguridad → Dispositivos donde has iniciado sesión",
				"Si ves un inicio de sesión sospechoso desde otra ciudad o país, cierra esa sesión y cambia tu contraseña inmediatamente.",
			],
		},
		quiz: [
			{
				question:
					"¿Con qué frecuencia deberías revisar la actividad de tus cuentas importantes?",
				options: [
					"Una vez al año",
					"Solo cuando sospechas de algo",
					"Mensualmente o cuando notes algo inusual",
					"Nunca, el sitio web lo hace automáticamente",
				],
				correctAnswer: 2,
				explanation:
					"Es recomendable revisar mensualmente la actividad de tus cuentas críticas y siempre que notes algo inusual, como emails no enviados o cambios no autorizados.",
			},
			{
				question:
					"¿Qué debes hacer PRIMERO si sospechas que tu cuenta fue hackeada?",
				options: [
					"Eliminar la cuenta completamente",
					"Cambiar la contraseña inmediatamente",
					"Publicar en redes sociales para advertir a otros",
					"Esperar a ver si el problema se resuelve solo",
				],
				correctAnswer: 1,
				explanation:
					"Lo primero es cambiar la contraseña inmediatamente para evitar que el atacante mantenga acceso. Luego revisa actividad, activa 2FA y verifica configuraciones.",
			},
			{
				question: "¿Para qué sirve el sitio haveibeenpwned.com?",
				options: [
					"Para hackear cuentas de otras personas",
					"Para crear contraseñas seguras automáticamente",
					"Para verificar si tu email o contraseña han sido expuestos en filtraciones de datos",
					"Para comprar gestores de contraseñas",
				],
				correctAnswer: 2,
				explanation:
					"Have I Been Pwned es un servicio legítimo que te permite verificar si tu información ha sido parte de filtraciones de datos conocidas, ayudándote a tomar acción preventiva.",
			},
		],
	},
];
