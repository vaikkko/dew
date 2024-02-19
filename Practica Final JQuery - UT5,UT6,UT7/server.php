<?php
// Encabezado para indicar que la respuesta es JSON
header("Content-Type: application/json");

// Verifica que la URL del feed RSS se haya proporcionado
if (isset($_GET['url'])) {
    // Obtén la URL del feed RSS desde la consulta
    $rssUrl = $_GET['url'];

    // Obtén el contenido del feed RSS
    $rssContent = file_get_contents($rssUrl);

    // Convierte el contenido XML del feed a un array asociativo
    $rssData = simplexml_load_string($rssContent, null, LIBXML_NOCDATA);
    $jsonData = json_encode($rssData);
    
    // Imprime el JSON
    echo $jsonData;
} else {
    // Si no se proporciona la URL, devuelve un error
    echo json_encode(['error' => 'La URL del feed RSS no se proporcionó']);
}
?>