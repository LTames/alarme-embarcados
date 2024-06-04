int pirPin = D2; // Define o pino conectado ao sensor PIR.
int val; // Armazena o estado lido pelo sensor.

void setup() {
  Serial.begin(9600); 

  // Configuração da conexão Wi-Fi
  WiFi.mode(WIFI_OFF);       
  delay(1000);
  WiFi.mode(WIFI_STA);        
  WiFi.begin("luis_phone", "luis123");     
  
  // Aguarda a conexão Wi-Fi
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(". ");
  }

  Serial.println("WiFi conectado.");
  Serial.println("Endereço IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  val = digitalRead(pirPin); // Lê o estado do sensor PIR.

  if (val == LOW) {
    Serial.println("No motion"); // Se não houver movimento, printa "No motion".
  } else {
    Serial.println("Motion detected  ALARM"); // Se detectar movimento, printa "Motion detected ALARM".
  }

  delay(100); // Aguarda 100 milissegundos antes de repetir.
}
